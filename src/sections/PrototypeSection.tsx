type Props = {
  onPlay: () => void
}

export default function PrototypeSection({ onPlay }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
      <div className="liquid-glass glass-float relative overflow-hidden rounded-3xl p-6 sm:p-7">
        <div className="pointer-events-none absolute -inset-24 bg-[radial-gradient(circle_at_22%_18%,rgba(111,255,0,0.18),transparent_55%),radial-gradient(circle_at_76%_18%,rgba(255,69,195,0.14),transparent_62%)] blur-2xl" />
        <div className="relative">
          <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60">
            Early build
          </div>
          <div className="mt-3 text-balance font-grotesk text-2xl uppercase tracking-[0.08em] text-cream sm:text-3xl">
            Drop into a micro arena
          </div>
          <div className="mt-3 max-w-xl font-mono text-sm leading-relaxed text-cream/70">
            A tiny Three.js slice to validate rendering, layout, and lifecycle inside the reveal site.
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onPlay}
              className="glow-neon inline-flex items-center gap-3 rounded-full bg-neon/90 px-6 py-3 font-grotesk text-[12px] uppercase tracking-[0.16em] text-ink-950 shadow-[0_18px_60px_rgba(111,255,0,0.26)] transition hover:bg-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
            >
              <span>Play Prototype</span>
              <span aria-hidden="true" className="text-cream/30">
                →
              </span>
            </button>
            <div className="rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-xs text-cream/65">
              Esc or Exit to close
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="liquid-glass rounded-3xl p-6">
          <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/60">
            What’s inside
          </div>
          <ul className="mt-4 space-y-3 font-mono text-sm text-cream/70">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/80" />
              <span>Engine loop + cleanup path</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/70" />
              <span>Scene lighting, fog, and a placeholder titan mesh</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-neon/60" />
              <span>Asset loader wired for bundled textures</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/35 p-6 font-mono text-xs text-cream/60">
          This launcher is a scaffold for upcoming Tasks 2–6.
        </div>
      </div>
    </div>
  )
}
