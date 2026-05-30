import { useState } from "react"
import type { Weapon, WeaponCategory } from "../data"

type Props = {
  weapons: Weapon[]
}

const categoryMeta: Record<WeaponCategory, { label: string; glyph: string; chip: string }> = {
  weapon: {
    label: "Weapon",
    glyph: "⚡",
    chip: "border-orange-300/25 bg-orange-300/10 text-orange-100",
  },
  gadget: {
    label: "Gadget",
    glyph: "✦",
    chip: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  },
}

const accentById: Record<string, { glow: string; ring: string }> = {
  "bubble-blaster": {
    glow: "from-cyan-400/25 via-sky-300/10 to-black/45",
    ring: "from-cyan-300/40 via-white/15 to-white/5",
  },
  "gravity-hammer": {
    glow: "from-fuchsia-400/24 via-violet-300/10 to-black/45",
    ring: "from-fuchsia-300/40 via-white/15 to-white/5",
  },
  "comet-cannon": {
    glow: "from-sky-400/22 via-cyan-300/10 to-black/45",
    ring: "from-sky-300/40 via-white/15 to-white/5",
  },
  "disco-ray": {
    glow: "from-orange-400/20 via-fuchsia-300/12 to-black/45",
    ring: "from-orange-300/40 via-white/15 to-white/5",
  },
}

const defaultAccent = {
  glow: "from-cyan-400/20 via-white/[0.02] to-black/45",
  ring: "from-white/25 via-white/12 to-white/5",
}

export default function WeaponsSection({ weapons }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  if (weapons.length === 0) {
    return (
      <div className="liquid-glass rounded-3xl p-6 font-mono text-sm text-cream/70">
        Weapons data unavailable.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-sm text-cream/65">
          Hover to preview, tap to pin a card open.
        </div>
        <div className="flex flex-wrap gap-2">
          {Object.values(categoryMeta).map((meta) => (
            <div
              key={meta.label}
              className={[
                "liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                meta.chip,
              ].join(" ")}
            >
              <span className="text-sm leading-none">{meta.glyph}</span>
              <span>{meta.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {weapons.map((weapon) => {
          const accent = accentById[weapon.id] ?? defaultAccent
          const expanded = expandedId === weapon.id
          const cat = categoryMeta[weapon.category]
          return (
            <button
              key={weapon.id}
              type="button"
              onClick={() => setExpandedId((prev) => (prev === weapon.id ? null : weapon.id))}
              aria-expanded={expanded}
              className={[
                "group liquid-glass glass-float relative overflow-hidden rounded-2xl p-5 text-left",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
              ].join(" ")}
            >
              <div
                className={[
                  "pointer-events-none absolute -inset-14 bg-gradient-to-b blur-2xl",
                  accent.glow,
                  "opacity-0 motion-safe:transition-opacity motion-safe:duration-300",
                  "group-hover:opacity-100",
                  expanded ? "opacity-100" : "",
                ].join(" ")}
              />
              <div
                className={[
                  "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0",
                  accent.ring,
                  "motion-safe:transition-opacity motion-safe:duration-300",
                  "group-hover:opacity-100",
                  expanded ? "opacity-100" : "",
                ].join(" ")}
              />
              <div
                className={[
                  "weapon-sheen pointer-events-none absolute inset-0 opacity-0",
                  "motion-safe:transition-opacity motion-safe:duration-300",
                  "group-hover:opacity-100",
                  expanded ? "opacity-100" : "",
                ].join(" ")}
              />

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="truncate font-grotesk text-[16px] uppercase tracking-[0.08em] text-cream">
                      {weapon.name}
                    </div>
                    <div className="mt-2 font-mono text-sm text-cream/65">{weapon.tagline}</div>
                  </div>
                  <div
                    className={[
                      "liquid-glass inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 font-grotesk text-[12px] uppercase tracking-[0.14em]",
                      cat.chip,
                    ].join(" ")}
                  >
                    <span className="text-sm leading-none">{cat.glyph}</span>
                    <span>{cat.label}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/50">
                    Primary
                  </div>
                  <div className="min-w-0 truncate font-mono text-xs text-cream/75">
                    {weapon.primaryEffect}
                  </div>
                </div>

                <div
                  className={[
                    "mt-4 grid overflow-hidden rounded-xl border border-white/10 bg-black/25",
                    "motion-safe:transition-[grid-template-rows] motion-safe:duration-300",
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    "group-hover:grid-rows-[1fr]",
                  ].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="p-4">
                      <div className="font-mono text-sm leading-relaxed text-cream/75">
                        {weapon.description}
                      </div>
                      <div className="mt-4 grid gap-3 text-sm">
                        <div className="grid gap-1">
                          <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                            Secondary
                          </div>
                          <div className="font-mono text-cream/70">{weapon.secondaryEffect}</div>
                        </div>
                        <div className="grid gap-1">
                          <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                            Energy Source
                          </div>
                          <div className="font-mono text-cream/70">{weapon.energySource}</div>
                        </div>
                        <div className="grid gap-1">
                          <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                            Unlock Hint
                          </div>
                          <div className="font-mono text-cream/70">{weapon.unlockHint}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 text-xs">
                  <div className="font-mono text-cream/50">
                    {expanded ? "Tap to collapse" : "Tap to inspect"}
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
  )
}
