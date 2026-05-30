import { useMemo, useRef, useState } from "react"
import { buildFallbackAnswer, retrieveSources } from "../api/chat"

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

type GuideMessage = {
  id: string
  role: "user" | "assistant"
  content: string
  sources?: GuideSource[]
  mode?: GuideMode
}

const newId = () => {
  const crypto = globalThis.crypto
  if (crypto && typeof crypto.randomUUID === "function") return crypto.randomUUID()
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`
}

const modeBadge = (mode: GuideMode) => {
  if (mode === "openai") {
    return {
      label: "OpenAI",
      chip: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      dot: "bg-cyan-200/80 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]",
    }
  }
  return {
    label: "Local Lore",
    chip: "border-orange-300/25 bg-orange-300/10 text-orange-100",
    dot: "bg-orange-200/80 shadow-[0_0_0_3px_rgba(251,146,60,0.10)]",
  }
}

export default function GalacticGuideSection() {
  const [messages, setMessages] = useState<GuideMessage[]>(() => [
    {
      id: newId(),
      role: "assistant",
      content:
        "Ask me anything about Tiny Titan—planets, mounts, gadgets, storms, or mysteries. I’ll cite the lore entries I’m pulling from.",
      sources: [],
      mode: "fallback",
    },
  ])
  const [draft, setDraft] = useState("")
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const feedRef = useRef<HTMLDivElement | null>(null)

  const latestAnswer = useMemo(() => {
    for (let i = messages.length - 1; i >= 0; i -= 1) {
      const msg = messages[i]
      if (msg.role === "assistant") return msg
    }
    return null
  }, [messages])

  const suggestions = useMemo(
    () => [
      "What is the Prism Well?",
      "How do Orb Moths affect Crystal Planet storms?",
      "What makes the Bubble Blaster useful for traversal?",
      "Why do Titan Crabs guard the vents?",
    ],
    [],
  )

  const scrollFeed = () => {
    const node = feedRef.current
    if (!node) return
    const prefersReducedMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    node.scrollTo({ top: node.scrollHeight, behavior: prefersReducedMotion ? "auto" : "smooth" })
  }

  const send = async (question: string) => {
    setPending(true)
    setError(null)

    const userMessage: GuideMessage = { id: newId(), role: "user", content: question }
    setMessages((prev) => [...prev, userMessage])

    const assistantId = newId()
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "Reading the star charts…", sources: [] },
    ])

    queueMicrotask(scrollFeed)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      })

      const data = res.ok ? ((await res.json()) as GuideResponse) : null
      if (!data) throw new Error(`Request failed (${res.status})`)
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content: data.answer,
                sources: data.sources ?? [],
                mode: data.mode ?? "fallback",
              }
            : m,
        ),
      )
      queueMicrotask(scrollFeed)
    } catch (e) {
      const sources = retrieveSources(question)
      const fallback = buildFallbackAnswer(question, sources)
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content: fallback,
                sources,
                mode: "fallback",
              }
            : m,
        ),
      )
    } finally {
      setPending(false)
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (pending) return
    const question = draft.trim()
    if (!question) return
    setDraft("")
    await send(question)
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
      <div className="liquid-glass relative overflow-hidden rounded-3xl">
        <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.14),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(232,121,249,0.14),transparent_60%),radial-gradient(circle_at_50%_110%,rgba(251,146,60,0.10),transparent_60%)] opacity-80 blur-2xl" />
        <div className="relative flex flex-col">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-cream/10 px-5 py-5 sm:px-6">
            <div className="min-w-0">
              <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85">
                Galactic Guide Console
              </div>
              <div className="mt-2 font-mono text-xs text-cream/55">
                Answers are grounded in lore entries and always include sources.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {latestAnswer?.mode ? (
                (() => {
                  const badge = modeBadge(latestAnswer.mode)
                  return (
                    <div
                      className={[
                        "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                        badge.chip,
                      ].join(" ")}
                    >
                      <span className={["h-2 w-2 rounded-full", badge.dot].join(" ")} />
                      <span>{badge.label}</span>
                    </div>
                  )
                })()
              ) : (
                <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/65">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span>Ready</span>
                </div>
              )}
              {pending ? (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white/60 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-cyan-200/70 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]" />
                  <span>Scanning…</span>
                </div>
              ) : null}
            </div>
          </div>

          <div ref={feedRef} className="max-h-[420px] overflow-auto px-5 py-5 sm:max-h-[520px] sm:px-6">
            <div className="space-y-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={[
                    "grid gap-2",
                    m.role === "user" ? "justify-items-end" : "justify-items-start",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "w-full max-w-[560px] rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-glow",
                      m.role === "user"
                        ? "border-white/10 bg-white/[0.06] text-white"
                        : "border-white/10 bg-black/35 text-white/85",
                    ].join(" ")}
                  >
                    <div className="whitespace-pre-wrap text-pretty">{m.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-4 sm:px-6">
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    if (pending) return
                    setDraft(s)
                  }}
                  className="liquid-glass glass-float inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/65 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                >
                  {s}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="grid gap-2">
                <label htmlFor="galactic-question" className="text-xs font-semibold tracking-wide text-white/55">
                  Ask a question
                </label>
                <textarea
                  id="galactic-question"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  placeholder="E.g. Why do Sky Whales follow migration lines?"
                  rows={2}
                  className="w-full resize-none rounded-3xl border border-cream/10 bg-black/40 px-5 py-4 font-mono text-sm text-cream/85 shadow-[0_18px_70px_rgba(0,0,0,0.45)] outline-none placeholder:text-cream/35 focus:border-cream/15 focus:ring-2 focus:ring-neon/60"
                />
              </div>

              <button
                type="submit"
                disabled={pending || !draft.trim()}
                className="glass-float inline-flex items-center justify-center rounded-full bg-neon px-7 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
              >
                Transmit
              </button>
            </form>

            {error ? <div className="mt-3 text-xs text-orange-200/80">{error}</div> : null}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="liquid-glass rounded-3xl p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream">Sources</div>
              <div className="mt-2 font-mono text-xs text-cream/55">
                Lore snippets used for the latest answer.
              </div>
            </div>
            {latestAnswer?.sources && latestAnswer.sources.length > 0 ? (
              <div className="font-mono text-xs text-cream/50">{latestAnswer.sources.length} entries</div>
            ) : null}
          </div>

          {latestAnswer?.sources && latestAnswer.sources.length > 0 ? (
            <div className="mt-4 space-y-3">
              {latestAnswer.sources.map((s) => (
                <div key={s.id} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-white/80">{s.title}</div>
                      <div className="mt-1 text-[11px] font-medium text-white/45">{s.id}</div>
                    </div>
                    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white/65">
                      {s.category}
                    </div>
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-white/70">{s.snippet}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 text-sm text-white/60">
              Ask a question to generate a source list.
            </div>
          )}
        </div>

        <div className="liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70">
          <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">Tip</div>
          <div className="mt-3 leading-relaxed">
            Try referencing a planet, creature, or tool name. The guide retrieves the closest lore entries before answering.
          </div>
        </div>
      </div>
    </div>
  )
}
