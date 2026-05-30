import { useEffect, useMemo, useState } from "react"
import type { Planet } from "../data"
import {
  applyVote,
  normalizeTallies,
  readSelectionFromStorage,
  readTalliesFromStorage,
  type StorageLike,
  type Tallies,
  writeSelectionToStorage,
  writeTalliesToStorage,
} from "../lib/communityVote"

type Props = {
  planets: Planet[]
}

const planetTheme: Record<
  string,
  { glow: string; ring: string; chip: string; bar: string; badge: string }
> = {
  "crystal-planet": {
    glow: "from-cyan-400/26 via-sky-300/10 to-black/55",
    ring: "from-cyan-300/45 via-white/12 to-white/5",
    chip: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    bar: "from-cyan-300/60 via-sky-200/30 to-white/10",
    badge: "bg-cyan-300/15 text-cyan-100 ring-cyan-200/25",
  },
  "mushroom-planet": {
    glow: "from-fuchsia-500/22 via-violet-300/10 to-black/55",
    ring: "from-fuchsia-300/40 via-white/12 to-white/5",
    chip: "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100",
    bar: "from-fuchsia-300/55 via-violet-200/25 to-white/10",
    badge: "bg-fuchsia-300/15 text-fuchsia-100 ring-fuchsia-200/25",
  },
  "ember-planet": {
    glow: "from-orange-400/22 via-amber-200/10 to-black/55",
    ring: "from-orange-300/40 via-white/12 to-white/5",
    chip: "border-orange-300/25 bg-orange-300/10 text-orange-100",
    bar: "from-orange-300/60 via-amber-200/30 to-white/10",
    badge: "bg-orange-300/15 text-orange-100 ring-orange-200/25",
  },
}

const fallbackTheme = {
  glow: "from-white/14 via-white/[0.02] to-black/55",
  ring: "from-white/30 via-white/12 to-white/5",
  chip: "border-white/12 bg-white/[0.04] text-white/75",
  bar: "from-white/30 via-white/10 to-white/5",
  badge: "bg-white/10 text-white/75 ring-white/15",
}

const getStorage = (): StorageLike | null => {
  if (typeof window === "undefined") return null
  try {
    return window.localStorage
  } catch {
    return null
  }
}

export default function CommunityVoteSection({ planets }: Props) {
  const planetIds = useMemo(() => planets.map((p) => p.id), [planets])
  const [selection, setSelection] = useState<string | null>(null)
  const [tallies, setTallies] = useState<Tallies>(() => normalizeTallies(planetIds, null))
  const [persistence, setPersistence] = useState<"ready" | "unavailable">("ready")

  useEffect(() => {
    try {
      const storage = getStorage()
      if (!storage) {
        setPersistence("unavailable")
        return
      }
      setSelection(readSelectionFromStorage(storage, planetIds))
      setTallies(readTalliesFromStorage(storage, planetIds))
      setPersistence("ready")
    } catch {
      setPersistence("unavailable")
    }
  }, [planetIds])

  useEffect(() => {
    const storage = getStorage()
    if (!storage || typeof window === "undefined") return
    const handler = (event: StorageEvent) => {
      if (event.storageArea !== window.localStorage) return
      setTallies(readTalliesFromStorage(storage, planetIds))
      setSelection(readSelectionFromStorage(storage, planetIds))
    }
    window.addEventListener("storage", handler)
    return () => window.removeEventListener("storage", handler)
  }, [planetIds])

  const totalVotes = useMemo(() => Object.values(tallies).reduce((sum, n) => sum + n, 0), [tallies])

  const top = useMemo(() => {
    if (planetIds.length === 0) return null
    const ordered = [...planetIds].sort((a, b) => (tallies[b] ?? 0) - (tallies[a] ?? 0))
    return ordered[0] ?? null
  }, [planetIds, tallies])

  const castVote = (planetId: string) => {
    if (!planetIds.includes(planetId)) return
    if (persistence !== "ready") return
    const storage = getStorage()
    if (!storage) {
      setPersistence("unavailable")
      return
    }

    setTallies((prev) => {
      const next = applyVote({ planetIds, tallies: prev, selection, planetId })
      writeTalliesToStorage(storage, next.tallies)
      writeSelectionToStorage(storage, next.selection)
      setSelection(next.selection)
      return next.tallies
    })
  }

  if (planets.length === 0) {
    return (
      <div className="liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70">
        Planet data unavailable.
      </div>
    )
  }

  const selectedPlanet = selection ? planets.find((p) => p.id === selection) ?? null : null

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
      <div className="space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-xl font-mono text-sm text-cream/70">
            Cast a single vote for the next deep-dive reveal. Tallies update instantly and persist on this
            device.
          </div>
          <div
            className={[
              "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
              persistence === "ready"
                ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
                : "border-amber-300/25 bg-amber-300/10 text-amber-100",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
            <span>{persistence === "ready" ? "Local persistence on" : "Local persistence unavailable"}</span>
          </div>
        </div>

        <div className="grid gap-4">
          {planets.map((planet) => {
            const theme = planetTheme[planet.id] ?? fallbackTheme
            const voted = selection === planet.id
            const count = tallies[planet.id] ?? 0
            const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0

            return (
              <button
                key={planet.id}
                type="button"
                onClick={() => castVote(planet.id)}
                aria-pressed={voted}
                className={[
                  "group liquid-glass glass-float relative overflow-hidden rounded-3xl p-6 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
                  voted
                    ? "ring-1 ring-neon/30"
                    : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "pointer-events-none absolute -inset-16 bg-gradient-to-b blur-2xl",
                    theme.glow,
                    "opacity-60 motion-safe:transition-opacity motion-safe:duration-300",
                    voted ? "opacity-95" : "group-hover:opacity-95",
                  ].join(" ")}
                />
                <div
                  className={[
                    "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b opacity-0",
                    theme.ring,
                    "motion-safe:transition-opacity motion-safe:duration-300",
                    voted ? "opacity-100" : "group-hover:opacity-100",
                  ].join(" ")}
                />

                <div className="relative grid gap-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <div
                          className={[
                            "liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                            theme.chip,
                          ].join(" ")}
                        >
                          {planet.environment.biome}
                        </div>
                        {voted ? (
                          <div
                            className={[
                              "liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] ring-1",
                              theme.badge,
                            ].join(" ")}
                          >
                            Your vote
                          </div>
                        ) : null}
                        {top === planet.id && totalVotes > 0 ? (
                          <div className="liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/75">
                            Leading
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-4 font-grotesk text-xl uppercase tracking-[0.08em] text-cream sm:text-2xl">
                        {planet.name}
                      </div>
                      <div className="mt-2 font-mono text-sm text-cream/65">{planet.tagline}</div>
                    </div>

                    <div className="shrink-0 text-right">
                      <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                        Votes
                      </div>
                      <div className="mt-2 font-grotesk text-lg uppercase tracking-[0.08em] text-cream">
                        {count}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center justify-between text-xs text-white/55">
                      <span>Share</span>
                      <span className="font-semibold text-white/70">{pct}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full border border-white/10 bg-black/35">
                      <div
                        className={[
                          "h-full rounded-full bg-gradient-to-r motion-safe:transition-[width] motion-safe:duration-500",
                          theme.bar,
                        ].join(" ")}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
                    <div>
                      {voted
                        ? "Tap another planet to change your vote."
                        : selection
                          ? "Tap to switch your vote."
                          : "Tap to vote."}
                    </div>
                    <div className="text-cream/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80">
                      →
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="space-y-4">
        <div className="liquid-glass rounded-3xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream">
                Live Results
              </div>
              <div className="mt-2 font-mono text-sm text-cream/65" aria-live="polite">
                {totalVotes === 0 ? (
                  "No votes yet on this device."
                ) : (
                  <>
                    {totalVotes} total ·{" "}
                    <span className="font-semibold text-white/80">
                      {top ? planets.find((p) => p.id === top)?.name ?? "—" : "—"}
                    </span>{" "}
                    is leading
                  </>
                )}
              </div>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-black/35 px-5 py-4">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Your selection
              </div>
              <div className="mt-2 font-grotesk text-[14px] uppercase tracking-[0.08em] text-cream">
                {selectedPlanet ? selectedPlanet.name : "Not voted"}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {planets.map((planet) => {
              const theme = planetTheme[planet.id] ?? fallbackTheme
              const count = tallies[planet.id] ?? 0
              const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0
              return (
                <div key={planet.id} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-white">{planet.name}</div>
                      <div className="mt-1 text-xs text-white/55">{planet.environment.biome}</div>
                    </div>
                    <div className="shrink-0 text-right">
                      <div className="text-xs font-semibold text-white/60">{pct}%</div>
                      <div className="mt-0.5 text-xs text-white/55">{count} votes</div>
                    </div>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full border border-white/10 bg-black/35">
                    <div
                      className={[
                        "h-full rounded-full bg-gradient-to-r motion-safe:transition-[width] motion-safe:duration-500",
                        theme.bar,
                      ].join(" ")}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/60">
            Results are stored locally. To simulate a larger community feed, open the site in two tabs and vote
            in both.
          </div>
        </div>
      </div>
    </div>
  )
}
