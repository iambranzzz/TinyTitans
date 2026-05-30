import type { ReactNode } from "react"
import { useInViewOnce } from "../hooks/useInViewOnce"

type Props = {
  id: string
  kicker?: string
  title: string
  subtitle?: string
  children?: ReactNode
}

export default function SectionShell({ id, kicker, title, subtitle, children }: Props) {
  const { ref, visible } = useInViewOnce<HTMLElement>()

  const accent =
    id === "planets"
      ? "from-neon/14 via-cream/5 to-transparent"
      : id === "prototype"
        ? "from-neon/16 via-cream/6 to-transparent"
      : id === "weapons"
        ? "from-neon/12 via-cream/6 to-transparent"
        : id === "mounts"
          ? "from-neon/10 via-cream/4 to-transparent"
          : id === "creatures"
            ? "from-neon/10 via-cream/5 to-transparent"
            : id === "vote"
              ? "from-neon/12 via-cream/6 to-transparent"
              : "from-neon/10 via-cream/4 to-transparent"

  const accentScript =
    id === "planets"
      ? "World Atlas"
      : id === "prototype"
        ? "Arena"
      : id === "weapons"
        ? "Armory"
        : id === "mounts"
          ? "Ride Log"
          : id === "creatures"
            ? "Field Notes"
            : id === "vote"
              ? "Signal"
              : "Guide"

  return (
    <section
      ref={ref}
      id={id}
      className={[
        "section-anchor relative py-16 sm:py-24",
        "motion-safe:transition motion-safe:duration-700 motion-safe:ease-out",
        visible
          ? "opacity-100 translate-y-0 blur-none"
          : "motion-safe:opacity-0 motion-safe:translate-y-4 motion-safe:blur-sm motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-none",
      ].join(" ")}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 h-80">
        <div className={["absolute inset-0 bg-gradient-to-b blur-3xl", accent].join(" ")} />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/10 to-transparent" />
      </div>
      {id === "creatures" ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-screen [background-image:url('/creature-silhouettes.png')] bg-no-repeat [background-size:min(980px,92vw)_auto] [background-position:center_18%] [mask-image:radial-gradient(circle_at_center,black_0%,black_55%,transparent_78%)] [filter:brightness(1.15)_contrast(1.1)]"
        />
      ) : null}
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            {kicker ? (
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/75">
                <span className="h-1.5 w-1.5 rounded-full bg-neon/85 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]" />
                <span>{kicker}</span>
              </div>
            ) : null}
            <div className="relative mt-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-6 left-0 font-condiment text-3xl text-neon/70 mix-blend-screen sm:-top-7 sm:text-4xl"
              >
                {accentScript}
              </div>
              <h2 className="relative text-balance font-grotesk text-3xl uppercase tracking-[0.08em] text-cream sm:text-4xl">
                {title}
              </h2>
            </div>
            {subtitle ? (
              <p className="mt-4 max-w-2xl text-pretty font-mono text-base leading-relaxed text-cream/70 sm:text-lg">
                {subtitle}
              </p>
            ) : null}
          </div>
        </div>

        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}
