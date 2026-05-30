import React from "react"
import { renderToString } from "react-dom/server"
import { createServer } from "vite"

const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}

const createMemoryStorage = () => {
  const map = new Map()
  return {
    getItem: (key) => (map.has(key) ? map.get(key) : null),
    setItem: (key, value) => {
      map.set(key, String(value))
    },
    removeItem: (key) => {
      map.delete(key)
    },
  }
}

const capturedErrors = []
const originalConsoleError = console.error.bind(console)
console.error = (...args) => {
  capturedErrors.push(args.map(String).join(" "))
  originalConsoleError(...args)
}

const run = async () => {
  const prevOpenAi = process.env.OPENAI_API_KEY
  process.env.OPENAI_API_KEY = ""

  const server = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  })

  try {
    const dataModule = await server.ssrLoadModule("/src/data/index.ts")
    const contentResult = dataModule.loadBundledContent()
    assert(contentResult.ok, "Bundled content failed validation")

    const { content } = contentResult
    assert(content.planets.length === 3, "Expected 3 planets")
    assert(content.weapons.length === 4, "Expected 4 weapons")
    assert(content.mounts.length === 4, "Expected 4 mounts")
    assert(content.creatures.length === 6, "Expected 6 creatures")

    const appModule = await server.ssrLoadModule("/src/App.tsx")
    const html = renderToString(React.createElement(appModule.default))

    assert(html.includes("Tiny Titan"), "App render missing title")
    for (const planet of content.planets) assert(html.includes(planet.name), `Missing planet: ${planet.name}`)
    for (const weapon of content.weapons) assert(html.includes(weapon.name), `Missing weapon: ${weapon.name}`)
    for (const mount of content.mounts) assert(html.includes(mount.name), `Missing mount: ${mount.name}`)
    for (const creature of content.creatures)
      assert(html.includes(creature.name), `Missing creature: ${creature.name}`)

    const voteModule = await server.ssrLoadModule("/src/lib/communityVote.ts")
    const storage = createMemoryStorage()
    const planetIds = content.planets.map((p) => p.id)
    let state = {
      selection: null,
      tallies: voteModule.normalizeTallies(planetIds, null),
    }

    state = voteModule.applyVote({
      planetIds,
      tallies: state.tallies,
      selection: state.selection,
      planetId: planetIds[0],
    })
    voteModule.writeTalliesToStorage(storage, state.tallies)
    voteModule.writeSelectionToStorage(storage, state.selection)

    assert(voteModule.readSelectionFromStorage(storage, planetIds) === planetIds[0], "Vote selection did not persist")
    const persistedTallies = voteModule.readTalliesFromStorage(storage, planetIds)
    assert(persistedTallies[planetIds[0]] === 1, "Vote tally did not persist")

    state = voteModule.applyVote({
      planetIds,
      tallies: persistedTallies,
      selection: planetIds[0],
      planetId: planetIds[1],
    })
    assert(state.tallies[planetIds[0]] === 0, "Switching vote should decrement previous selection")
    assert(state.tallies[planetIds[1]] === 1, "Switching vote should increment next selection")

    const chatModule = await server.ssrLoadModule("/src/api/chat.ts")
    const sources = chatModule.retrieveSources("What is the Prism Well?")
    assert(Array.isArray(sources) && sources.length > 0, "Guide retrieval produced no sources")
    const fallback = chatModule.buildFallbackAnswer("What is the Prism Well?", sources)
    assert(typeof fallback === "string" && fallback.includes("- "), "Guide fallback answer did not include sources")

    const req = new Request("http://local.test/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: "What is the Prism Well?" }),
    })
    const res = await chatModule.POST(req)
    assert(res.ok, "Guide endpoint did not return OK")
    const payload = await res.json()
    assert(payload && typeof payload === "object", "Guide endpoint returned invalid JSON")
    assert(payload.mode === "fallback", "Guide endpoint expected fallback mode when OpenAI is unavailable")
    assert(Array.isArray(payload.sources) && payload.sources.length > 0, "Guide endpoint returned empty sources")
    assert(typeof payload.answer === "string" && payload.answer.length > 0, "Guide endpoint returned empty answer")

    const gameModule = await server.ssrLoadModule("/src/game/index.ts")
    const runtime = await gameModule.startPrototypeEngine({})
    assert(runtime && typeof runtime.dispose === "function", "Prototype runtime missing dispose")
    runtime.dispose()
  } finally {
    await server.close()
    if (prevOpenAi === undefined) delete process.env.OPENAI_API_KEY
    else process.env.OPENAI_API_KEY = prevOpenAi
  }

  if (capturedErrors.length > 0) {
    throw new Error(`Console errors detected:\n${capturedErrors.join("\n")}`)
  }
}

run().catch((err) => {
  console.error(err instanceof Error ? err.stack || err.message : String(err))
  process.exitCode = 1
})
