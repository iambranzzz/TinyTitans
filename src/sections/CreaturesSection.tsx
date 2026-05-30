import { useMemo, useState } from "react"
import type { Creature, CreatureRole, Planet } from "../data"

type Props = {
  creatures: Creature[]
  planets: Planet[]
  onOpenCreature: (creature: Creature) => void
}

const roleOrder: CreatureRole[] = ["hostile", "neutral", "passive"]

const roleMeta: Record<
  CreatureRole,
  { label: string; glyph: string; chip: string; glow: string; ring: string }
> = {
  hostile: {
    label: "Hostile",
    glyph: "⟡",
    chip: "border-rose-400/25 bg-rose-400/10 text-rose-100",
    glow: "from-rose-400/18 via-white/[0.02] to-black/55",
    ring: "from-rose-300/35 via-white/15 to-white/5",
  },
  neutral: {
    label: "Neutral",
    glyph: "◈",
    chip: "border-amber-300/25 bg-amber-300/10 text-amber-50",
    glow: "from-amber-300/16 via-white/[0.02] to-black/55",
    ring: "from-amber-200/30 via-white/15 to-white/5",
  },
  passive: {
    label: "Passive",
    glyph: "✶",
    chip: "border-emerald-300/25 bg-emerald-300/10 text-emerald-50",
    glow: "from-emerald-300/16 via-white/[0.02] to-black/55",
    ring: "from-emerald-200/30 via-white/15 to-white/5",
  },
}

const titleizeId = (id: string) =>
  id
    .split(/[-_]/g)
    .filter(Boolean)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(" ")

const DangerMeter = ({ rating }: { rating: number }) => {
  const safe = Number.isFinite(rating) ? Math.max(0, Math.min(5, Math.round(rating))) : 0
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={["h-1.5 w-5 rounded-full", i < safe ? "bg-white/75" : "bg-white/12"].join(" ")}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="text-xs font-medium text-white/55">Danger {safe}/5</div>
    </div>
  )
}

const Chip = ({ children }: { children: string }) => (
  <span className="inline-flex items-center rounded-full border border-cream/10 bg-white/[0.04] px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70">
    {children}
  </span>
)

export const CreatureDetail = ({ creature, planets }: { creature: Creature; planets: Planet[] }) => {
  const planetNameById = useMemo(() => new Map(planets.map((p) => [p.id, p.name] as const)), [planets])
  const meta = roleMeta[creature.role]

  return (
    <div className="space-y-5">
      <div className="liquid-glass relative overflow-hidden rounded-3xl p-6">
        <div className={["absolute -inset-14 bg-gradient-to-b blur-2xl", meta.glow].join(" ")} />
        <div className="relative">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div
                className={[
                  "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                  meta.chip,
                ].join(" ")}
              >
                <span className="text-sm leading-none">{meta.glyph}</span>
                <span>{meta.label}</span>
              </div>
              <div className="mt-5 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Behavior summary
              </div>
              <div className="mt-3 font-mono text-sm leading-relaxed text-cream/75">{creature.behavior}</div>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-black/35 px-5 py-4">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Threat Scan
              </div>
              <div className="mt-2">
                <DangerMeter rating={creature.dangerRating} />
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Habitat
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {creature.habitatPlanetIds.map((pid) => (
                  <Chip key={pid}>{planetNameById.get(pid) ?? titleizeId(pid)}</Chip>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Tags
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {creature.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="liquid-glass rounded-3xl p-6">
        <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream">Field Note</div>
        <div className="mt-4 rounded-3xl border border-cream/10 bg-black/25 p-6 font-mono text-sm leading-relaxed text-cream/75">
          {creature.fieldNote}
        </div>
      </div>
    </div>
  )
}

export default function CreaturesSection({ creatures, planets, onOpenCreature }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<CreatureRole | "all">("all")
  const planetNameById = useMemo(() => new Map(planets.map((p) => [p.id, p.name] as const)), [planets])

  const ordered = useMemo(() => {
    const score = (c: Creature) => roleOrder.indexOf(c.role) * 100 + (5 - c.dangerRating) * 10 + c.name.length / 100
    return [...creatures].sort((a, b) => score(a) - score(b))
  }, [creatures])

  const filtered = useMemo(() => {
    if (filter === "all") return ordered
    return ordered.filter((c) => c.role === filter)
  }, [filter, ordered])

  if (creatures.length === 0) {
    return (
      <div className="liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70">
        Creature data unavailable.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-sm text-cream/65">
          Tap a creature card to expand the field panel. Open the dossier for a full readout.
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
          {roleOrder.map((role) => {
            const meta = roleMeta[role]
            const active = filter === role
            return (
              <button
                key={role}
                type="button"
                onClick={() => setFilter(role)}
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((creature) => {
          const expanded = expandedId === creature.id
          const meta = roleMeta[creature.role]
          const habitats = creature.habitatPlanetIds.map((pid) => planetNameById.get(pid) ?? titleizeId(pid))
          const primaryHabitat = habitats[0] ?? "Unknown habitat"

          return (
            <div
              key={creature.id}
              onClick={() => setExpandedId((prev) => (prev === creature.id ? null : creature.id))}
              onKeyDown={(e) => {
                if (e.key !== "Enter" && e.key !== " ") return
                e.preventDefault()
                setExpandedId((prev) => (prev === creature.id ? null : creature.id))
              }}
              role="button"
              tabIndex={0}
              aria-expanded={expanded}
              className={[
                "group liquid-glass glass-float relative cursor-pointer overflow-hidden rounded-2xl p-5 text-left",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
              ].join(" ")}
            >
              <div
                className={[
                  "pointer-events-none absolute -inset-16 bg-gradient-to-b blur-2xl",
                  meta.glow,
                  "opacity-0 motion-safe:transition-opacity motion-safe:duration-300",
                  expanded ? "opacity-100" : "group-hover:opacity-90",
                ].join(" ")}
              />
              <div
                className={[
                  "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0",
                  meta.ring,
                  "motion-safe:transition-opacity motion-safe:duration-300",
                  expanded ? "opacity-100" : "group-hover:opacity-70",
                ].join(" ")}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream">
                      {creature.name}
                    </div>
                    <div className="mt-2 font-mono text-sm text-cream/65">{primaryHabitat}</div>
                  </div>
                  <div
                    className={[
                      "liquid-glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                      meta.chip,
                    ].join(" ")}
                  >
                    <span className="text-sm leading-none">{meta.glyph}</span>
                    <span>{meta.label}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <DangerMeter rating={creature.dangerRating} />
                </div>

                {creature.tags.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {creature.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs font-medium text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div
                  className={[
                    "mt-5 grid overflow-hidden rounded-2xl border border-white/10 bg-black/25",
                    "motion-safe:transition-[grid-template-rows] motion-safe:duration-300",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="p-4">
                      <div className="text-xs font-semibold tracking-wide text-white/55">Behavior summary</div>
                      <div className="mt-2 text-sm leading-relaxed text-white/72">{creature.behavior}</div>

                      <div className="mt-4 text-xs font-semibold tracking-wide text-white/55">Field note</div>
                      <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm leading-relaxed text-white/75">
                        {creature.fieldNote}
                      </div>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                        <div className="text-xs font-medium text-white/45">
                          {expanded ? "Tap card to collapse" : ""}
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            onOpenCreature(creature)
                          }}
                          className="glass-float inline-flex items-center justify-center rounded-full bg-neon px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                        >
                          Open Dossier
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 text-xs">
                  <div className="text-white/45">{expanded ? "Expanded" : "Tap to expand"}</div>
                  <div className="text-white/55 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-white/75">
                    →
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
