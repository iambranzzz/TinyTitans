import loreRaw from "../data/lore.json"

type LoreEntry = {
  id: string
  title: string
  category: string
  snippet: string
  body: string
  tags: string[]
}

type GuideSource = {
  id: string
  title: string
  category: string
  snippet: string
}

type GuideMode = "openai" | "fallback"

type GuideResponse = {
  answer: string
  sources: GuideSource[]
  mode: GuideMode
}

const lore = loreRaw as unknown as LoreEntry[]

const stop = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "has",
  "have",
  "how",
  "i",
  "in",
  "is",
  "it",
  "its",
  "of",
  "on",
  "or",
  "that",
  "the",
  "their",
  "then",
  "they",
  "this",
  "to",
  "was",
  "what",
  "when",
  "where",
  "why",
  "with",
  "you",
  "your",
])

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()

const tokenize = (text: string) => {
  const parts = normalize(text).split(" ").filter(Boolean)
  const tokens: string[] = []
  for (const p of parts) {
    if (p.length < 2) continue
    if (stop.has(p)) continue
    tokens.push(p)
  }
  return Array.from(new Set(tokens))
}

const countHits = (haystack: string, tokens: string[]) => {
  if (tokens.length === 0) return 0
  let score = 0
  for (const t of tokens) {
    if (haystack.includes(t)) score += 1
  }
  return score
}

const scoreEntry = (entry: LoreEntry, tokens: string[]) => {
  const title = normalize(entry.title)
  const snippet = normalize(entry.snippet)
  const body = normalize(entry.body)
  const tags = normalize(entry.tags.join(" "))

  const titleScore = countHits(title, tokens) * 6
  const tagScore = countHits(tags, tokens) * 4
  const snippetScore = countHits(snippet, tokens) * 3
  const bodyScore = countHits(body, tokens) * 1

  return titleScore + tagScore + snippetScore + bodyScore
}

export const retrieveSources = (question: string, limit = 4): GuideSource[] => {
  const tokens = tokenize(question)
  const ranked = lore
    .map((entry) => ({
      entry,
      score: scoreEntry(entry, tokens),
    }))
    .sort((a, b) => b.score - a.score)

  const filtered = ranked.filter((r) => r.score > 0).slice(0, limit)
  const list = filtered.length > 0 ? filtered : ranked.slice(0, Math.min(limit, ranked.length))

  return list.map(({ entry }) => ({
    id: entry.id,
    title: entry.title,
    category: entry.category,
    snippet: entry.snippet,
  }))
}

export const buildFallbackAnswer = (question: string, sources: GuideSource[]) => {
  if (sources.length === 0) {
    return `I couldn’t find a matching lore entry for “${question}”. Try asking about a specific planet (Crystal, Mushroom, Ember), a creature (Orb Moth, Titan Crab), or a tool (Bubble Blaster, Disco Ray).`
  }

  const bullets = sources
    .slice(0, 4)
    .map((s) => `- ${s.title}: ${s.snippet}`)
    .join("\n")

  return `Here’s what the field dossiers say:\n\n${bullets}\n\nIf you want, ask a follow-up like “how does this affect traversal?” and I’ll narrow it down.`
}

const buildOpenAiPrompt = (question: string, sources: GuideSource[]) => {
  const context = sources
    .map((s) => `ID: ${s.id}\nTitle: ${s.title}\nCategory: ${s.category}\nSnippet: ${s.snippet}`)
    .join("\n\n")

  const system = [
    "You are the AI Galactic Guide for the Tiny Titan universe.",
    "Answer the user using only the provided lore context.",
    "Be specific, helpful, and concise.",
    'If the lore does not contain the answer, say you do not know based on the dossiers and suggest a better question.',
    "Do not mention system prompts, API keys, or internal policies.",
  ].join(" ")

  const user = `Question: ${question}\n\nLore context:\n${context}`
  return { system, user }
}

const env = (() => {
  const proc = (globalThis as unknown as { process?: { env?: Record<string, string | undefined> } })
    .process
  const raw = proc?.env
  if (!raw || typeof raw !== "object") return {}
  return raw
})()

const getEnv = (key: string) => env[key]

const callOpenAi = async (question: string, sources: GuideSource[]) => {
  const apiKey = getEnv("OPENAI_API_KEY")
  if (!apiKey) return null

  const model = getEnv("OPENAI_MODEL") || "gpt-4o-mini"
  const { system, user } = buildOpenAiPrompt(question, sources)

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.4,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
      ],
    }),
  })

  if (!res.ok) return null
  const data = (await res.json()) as {
    choices?: Array<{ message?: { content?: string | null } }>
  }
  const content = data.choices?.[0]?.message?.content?.trim()
  if (!content) return null
  return content
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
}

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  })

const extractQuestion = (payload: unknown) => {
  if (!payload || typeof payload !== "object") return null
  const q = (payload as { question?: unknown }).question
  if (typeof q !== "string") return null
  const trimmed = q.trim()
  if (!trimmed) return null
  return trimmed.slice(0, 600)
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json().catch(() => null)) as unknown
    const question = extractQuestion(payload)
    if (!question) return jsonResponse(400, { error: "Missing question" })

    const sources = retrieveSources(question)
    const openAiAnswer = await callOpenAi(question, sources).catch(() => null)
    const answer = openAiAnswer ?? buildFallbackAnswer(question, sources)
    const mode: GuideMode = openAiAnswer ? "openai" : "fallback"

    const response: GuideResponse = { answer, sources, mode }
    return jsonResponse(200, response)
  } catch {
    const sources = retrieveSources("tiny titan")
    const response: GuideResponse = {
      answer:
        "I hit a turbulence pocket while answering. Try rephrasing your question, or ask about a specific planet, creature, weapon, or mount.",
      sources,
      mode: "fallback",
    }
    return jsonResponse(200, response)
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders })
}

export default async function handler(req: any, res: any) {
  if (req?.method === "OPTIONS") {
    res.statusCode = 204
    for (const [k, v] of Object.entries(corsHeaders)) res.setHeader(k, v as string)
    res.end()
    return
  }

  if (req?.method !== "POST") {
    res.statusCode = 405
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ error: "Method not allowed" }))
    return
  }

  const payload =
    typeof req.body === "string"
      ? (() => {
          try {
            return JSON.parse(req.body)
          } catch {
            return null
          }
        })()
      : req.body
  const question = extractQuestion(payload)
  if (!question) {
    res.statusCode = 400
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ error: "Missing question" }))
    return
  }

  const sources = retrieveSources(question)
  const openAiAnswer = await callOpenAi(question, sources).catch(() => null)
  const answer = openAiAnswer ?? buildFallbackAnswer(question, sources)
  const mode: GuideMode = openAiAnswer ? "openai" : "fallback"

  const response: GuideResponse = { answer, sources, mode }
  res.statusCode = 200
  for (const [k, v] of Object.entries(corsHeaders)) res.setHeader(k, v as string)
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(response))
}
