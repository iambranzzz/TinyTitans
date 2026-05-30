import type { Creature, Planet } from "../data"

type Props = {
  planet: Planet
  creatures: Creature[]
}

const roleStyles: Record<Creature["role"], string> = {
  hostile: "border-rose-400/25 bg-rose-400/10 text-rose-100",
  neutral: "border-amber-300/25 bg-amber-300/10 text-amber-50",
  passive: "border-emerald-300/25 bg-emerald-300/10 text-emerald-50",
}

const DangerMeter = ({ rating }: { rating: number }) => {
  const safe = Number.isFinite(rating) ? Math.max(0, Math.min(5, Math.round(rating))) : 0
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={[
              "h-1.5 w-4 rounded-full",
              i < safe ? "bg-white/70" : "bg-white/12",
            ].join(" ")}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="text-xs font-medium text-white/55">Danger {safe}/5</div>
    </div>
  )
}

const ChipList = ({ items }: { items: string[] }) => {
  if (items.length === 0) return null
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="liquid-glass inline-flex items-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export default function PlanetDetail({ planet, creatures }: Props) {
  return (
    <div className="space-y-6">
      <div className="liquid-glass rounded-3xl p-6">
        <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">Overview</div>
        <div className="mt-3 font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream">
          {planet.tagline}
        </div>
        <div className="mt-3 font-mono text-sm leading-relaxed text-cream/70">{planet.description}</div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
        <div className="liquid-glass rounded-3xl p-6">
          <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85">Environment</div>
          <div className="mt-4 grid gap-3">
            <div className="rounded-3xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">Biome</div>
              <div className="mt-2 font-mono text-sm text-cream/85">{planet.environment.biome}</div>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Atmosphere
              </div>
              <div className="mt-2 font-mono text-sm text-cream/85">{planet.environment.atmosphere}</div>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">Hazards</div>
              <div className="mt-2">
                <ChipList items={planet.environment.hazards} />
              </div>
            </div>
            <div className="rounded-3xl border border-cream/10 bg-black/30 p-5">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Resources
              </div>
              <div className="mt-2">
                <ChipList items={planet.environment.resources} />
              </div>
            </div>
          </div>
        </div>

        <div className="liquid-glass rounded-3xl p-6">
          <div className="font-grotesk text-[14px] uppercase tracking-[0.14em] text-cream/85">
            Points of Interest
          </div>
          <div className="mt-4 space-y-3">
            {planet.pointsOfInterest.map((poi) => (
              <div key={poi.id} className="rounded-3xl border border-cream/10 bg-black/30 p-5">
                <div className="font-grotesk text-[14px] uppercase tracking-[0.08em] text-cream">
                  {poi.name}
                </div>
                <div className="mt-2 font-mono text-sm leading-relaxed text-cream/70">{poi.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-glow backdrop-blur-xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-white/70">Native Creatures</div>
            <div className="mt-1 text-sm text-white/55">
              Field notes from the planet index.
            </div>
          </div>
          <div className="text-xs font-medium text-white/45">
            {creatures.length} total
          </div>
        </div>

        {creatures.length === 0 ? (
          <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
            No creature entries found for this planet.
          </div>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {creatures.map((creature) => (
              <div
                key={creature.id}
                className="rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">{creature.name}</div>
                    <div className="mt-1 text-sm leading-relaxed text-white/70">
                      {creature.behavior}
                    </div>
                  </div>
                  <span
                    className={[
                      "shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold",
                      roleStyles[creature.role],
                    ].join(" ")}
                  >
                    {creature.role}
                  </span>
                </div>

                <div className="mt-3">
                  <DangerMeter rating={creature.dangerRating} />
                </div>

                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm text-white/75">
                  {creature.fieldNote}
                </div>

                {creature.tags.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {creature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/65"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
