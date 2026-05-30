import type { Planet } from "../data"

type Props = {
  planets: Planet[]
  onSelect: (planetId: string) => void
}

const accents: Record<string, { band: string; glow: string; dot: string }> = {
  "crystal-planet": {
    band: "from-cyan-300/15 via-sky-200/10 to-fuchsia-300/15",
    glow: "bg-cyan-300/70 shadow-[0_0_0_3px_rgba(34,211,238,0.10)]",
    dot: "bg-cyan-200/75",
  },
  "mushroom-planet": {
    band: "from-fuchsia-300/15 via-emerald-200/10 to-cyan-300/15",
    glow: "bg-fuchsia-300/70 shadow-[0_0_0_3px_rgba(232,121,249,0.10)]",
    dot: "bg-fuchsia-200/75",
  },
  "ember-planet": {
    band: "from-orange-300/15 via-amber-200/10 to-rose-300/15",
    glow: "bg-orange-300/70 shadow-[0_0_0_3px_rgba(251,146,60,0.10)]",
    dot: "bg-orange-200/75",
  },
}

export default function PlanetExplorer({ planets, onSelect }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {planets.map((planet) => {
        const accent = accents[planet.id] ?? accents["crystal-planet"]
        return (
          <button
            key={planet.id}
            type="button"
            onClick={() => onSelect(planet.id)}
            className="group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
          >
            <div
              className={[
                "pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",
                "bg-gradient-to-br",
                accent.band,
              ].join(" ")}
            />
            <div className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.10),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(232,121,249,0.10),transparent_60%)] opacity-70 blur-2xl transition duration-300 group-hover:opacity-95" />

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={["h-2 w-2 rounded-full", accent.dot].join(" ")} />
                    <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60">
                      Planet Brief
                    </div>
                  </div>
                  <div className="mt-3 truncate font-grotesk text-[18px] uppercase tracking-[0.08em] text-cream">
                    {planet.name}
                  </div>
                </div>
                <div className="text-cream/45 motion-safe:transition motion-safe:group-hover:translate-x-0.5 group-hover:text-neon/80">
                  →
                </div>
              </div>

              <div className="mt-3 font-mono text-sm leading-relaxed text-cream/65">{planet.tagline}</div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full border border-cream/10 bg-black/30 px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70",
                    "backdrop-blur-sm",
                  ].join(" ")}
                >
                  <span className={["h-1.5 w-1.5 rounded-full", accent.glow].join(" ")} />
                  <span className="truncate">{planet.environment.biome}</span>
                </span>
                <span className="inline-flex items-center rounded-full border border-cream/10 bg-black/30 px-3 py-1 font-grotesk text-[12px] uppercase tracking-[0.14em] text-cream/70 backdrop-blur-sm">
                  {planet.nativeCreatureIds.length} creatures
                </span>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
