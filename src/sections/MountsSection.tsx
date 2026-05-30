import { useEffect, useMemo, useState } from "react"
import type { Mount, MountTraversal } from "../data"

type Props = {
  mounts: Mount[]
  onOpenMount: (mount: Mount) => void
}

const traversalOrder: MountTraversal[] = ["ground", "air", "burrow", "water"]

const traversalMeta: Record<
  MountTraversal,
  { label: string; glyph: string; glow: string; ring: string; chip: string }
> = {
  ground: {
    label: "Ground",
    glyph: "⇢",
    glow: "from-cyan-400/25 via-white/[0.02] to-black/35",
    ring: "from-cyan-300/40 via-white/15 to-white/5",
    chip: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  },
  air: {
    label: "Air",
    glyph: "↟",
    glow: "from-fuchsia-400/22 via-white/[0.02] to-black/35",
    ring: "from-fuchsia-300/40 via-white/15 to-white/5",
    chip: "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100",
  },
  burrow: {
    label: "Burrow",
    glyph: "⟱",
    glow: "from-orange-400/22 via-white/[0.02] to-black/35",
    ring: "from-orange-300/40 via-white/15 to-white/5",
    chip: "border-orange-300/25 bg-orange-300/10 text-orange-100",
  },
  water: {
    label: "Water",
    glyph: "≈",
    glow: "from-sky-400/22 via-white/[0.02] to-black/35",
    ring: "from-sky-300/40 via-white/15 to-white/5",
    chip: "border-sky-300/25 bg-sky-300/10 text-sky-100",
  },
}

const titleizeId = (id: string) =>
  id
    .split(/[-_]/g)
    .filter(Boolean)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(" ")

const SpeedMeter = ({ value }: { value: number }) => (
  <div className="flex items-center gap-2">
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={[
            "h-1.5 w-6 rounded-full",
            i < value ? "bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]" : "bg-white/10",
          ].join(" ")}
        />
      ))}
    </div>
    <div className="text-xs font-medium text-white/55">{value}/5</div>
  </div>
)

export const MountDetail = ({ mount }: { mount: Mount }) => {
  const meta = traversalMeta[mount.traversal]

  return (
    <div className="space-y-5">
      <div className="liquid-glass relative overflow-hidden rounded-3xl p-6">
        <div className={["absolute -inset-14 bg-gradient-to-b blur-2xl", meta.glow].join(" ")} />
        <div className="relative space-y-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60">
                {mount.tagline}
              </div>
              <div className="mt-3 font-mono text-sm leading-relaxed text-cream/75">{mount.travelFantasy}</div>
            </div>
            <div
              className={[
                "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                meta.chip,
              ].join(" ")}
            >
              <span className="text-sm leading-none">{meta.glyph}</span>
              <span>{meta.label}</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Handling Profile
              </div>
              <div className="mt-3 grid gap-2 font-mono text-sm text-cream/70">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-white/55">Temperament</span>
                  <span className="font-medium text-white/80">{mount.temperament}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-white/55">Handling</span>
                  <span className="font-medium text-white/80">{mount.handling}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-white/55">Top speed</span>
                  <SpeedMeter value={mount.topSpeedRating} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Habitat
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {mount.habitatPlanetIds.map((pid) => (
                  <span
                    key={pid}
                    className="inline-flex items-center rounded-full border border-cream/10 bg-white/[0.04] px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70"
                  >
                    {titleizeId(pid)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="liquid-glass rounded-3xl p-6">
        <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream">
          Traversal Capabilities
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {mount.capabilities.map((cap) => (
            <div
              key={cap}
              className="rounded-2xl border border-cream/10 bg-black/25 px-5 py-4 font-mono text-sm text-cream/70"
            >
              {cap}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function MountsSection({ mounts, onOpenMount }: Props) {
  const [filter, setFilter] = useState<MountTraversal | "all">("all")
  const orderedMounts = useMemo(() => {
    const score = (m: Mount) => traversalOrder.indexOf(m.traversal) * 10 + (5 - m.topSpeedRating)
    return [...mounts].sort((a, b) => score(a) - score(b))
  }, [mounts])

  const filteredMounts = useMemo(() => {
    if (filter === "all") return orderedMounts
    return orderedMounts.filter((m) => m.traversal === filter)
  }, [filter, orderedMounts])

  const [selectedId, setSelectedId] = useState(() => filteredMounts[0]?.id ?? "")

  useEffect(() => {
    if (filteredMounts.length === 0) {
      setSelectedId("")
      return
    }
    if (!filteredMounts.some((m) => m.id === selectedId)) setSelectedId(filteredMounts[0].id)
  }, [filteredMounts, selectedId])

  const selected = useMemo(() => {
    return filteredMounts.find((m) => m.id === selectedId) ?? filteredMounts[0] ?? null
  }, [filteredMounts, selectedId])

  const handleSelect = (mount: Mount) => {
    if (mount.id === selectedId) onOpenMount(mount)
    else setSelectedId(mount.id)
  }

  const selectedMeta = selected ? traversalMeta[selected.traversal] : null

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="font-mono text-sm text-cream/65">
            Tap a card to stage it. Tap again to open the expanded view.
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={[
                "liquid-glass glass-float rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
                filter === "all"
                  ? "text-neon"
                  : "text-cream/70 hover:text-neon",
              ].join(" ")}
            >
              All
            </button>
            {traversalOrder.map((t) => {
              const meta = traversalMeta[t]
              const active = filter === t
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setFilter(t)}
                  className={[
                    "liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
                    active
                      ? "text-neon"
                      : "text-cream/70 hover:text-neon",
                  ].join(" ")}
                >
                  <span className="text-sm leading-none">{meta.glyph}</span>
                  <span>{meta.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="liquid-glass relative overflow-hidden rounded-3xl p-6">
          {selectedMeta ? (
            <div className={["absolute -inset-12 bg-gradient-to-b blur-2xl", selectedMeta.glow].join(" ")} />
          ) : null}
          <div className="relative">
            {selected ? (
              <div className="grid gap-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/75">
                      <span className="text-sm leading-none">{selectedMeta?.glyph}</span>
                      <span>{selectedMeta?.label}</span>
                    </div>
                    <div className="mt-5 font-grotesk text-2xl uppercase tracking-[0.08em] text-cream sm:text-3xl">
                      {selected.name}
                    </div>
                    <div className="mt-2 font-mono text-sm text-cream/65">{selected.tagline}</div>
                    <div className="mt-4 font-mono text-sm leading-relaxed text-cream/75">
                      {selected.travelFantasy}
                    </div>
                  </div>
                  <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end">
                    <div className="rounded-3xl border border-cream/10 bg-black/35 px-5 py-4">
                      <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                        Top speed
                      </div>
                      <div className="mt-2">
                        <SpeedMeter value={selected.topSpeedRating} />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenMount(selected)}
                      className="glass-float inline-flex w-full items-center justify-center rounded-full bg-neon px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 sm:w-auto"
                    >
                      Open Expanded View
                    </button>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs font-semibold tracking-wide text-white/55">Feel</div>
                    <div className="mt-2 grid gap-1 text-sm text-white/70">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-white/55">Temperament</span>
                        <span className="font-medium text-white/80">{selected.temperament}</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-white/55">Handling</span>
                        <span className="font-medium text-white/80">{selected.handling}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                    <div className="text-xs font-semibold tracking-wide text-white/55">Signature Moves</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.capabilities.slice(0, 3).map((cap) => (
                        <span
                          key={cap}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/70"
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-white/65">No mounts available.</div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/70">
          Mount roster
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {filteredMounts.map((mount) => {
            const meta = traversalMeta[mount.traversal]
            const active = mount.id === selected?.id
            return (
              <button
                key={mount.id}
                type="button"
                onClick={() => handleSelect(mount)}
                className={[
                  "group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
                  active
                    ? "ring-1 ring-neon/25"
                    : "",
                ].join(" ")}
              >
                <div className={["absolute -inset-10 bg-gradient-to-b opacity-80 blur-2xl", meta.glow].join(" ")} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={[
                          "liquid-glass inline-flex items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                          meta.chip,
                        ].join(" ")}
                      >
                        <span className="text-sm leading-none">{meta.glyph}</span>
                        <span>{meta.label}</span>
                      </span>
                      <span className="font-mono text-[11px] text-cream/55">Tap twice for details</span>
                    </div>
                    <div className="mt-4 font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream">
                      {mount.name}
                    </div>
                    <div className="mt-2 font-mono text-sm text-cream/65">{mount.tagline}</div>
                  </div>

                  <div className="shrink-0 text-right">
                    <div className="text-xs font-semibold text-white/55">Speed</div>
                    <div className="mt-1">
                      <SpeedMeter value={mount.topSpeedRating} />
                    </div>
                  </div>
                </div>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {mount.capabilities.slice(0, 2).map((cap) => (
                    <span
                      key={cap}
                      className={[
                        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
                        active ? "border-white/14 bg-white/[0.06] text-white/75" : "border-white/10 bg-white/[0.04] text-white/65",
                      ].join(" ")}
                    >
                      {cap}
                    </span>
                  ))}
                </div>
                <div
                  className={[
                    "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 transition group-hover:opacity-100",
                    meta.ring,
                  ].join(" ")}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
