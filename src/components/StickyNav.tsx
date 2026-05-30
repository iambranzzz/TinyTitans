import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import ModalDrawer from "./ModalDrawer"
import { scrollToSection } from "../lib/scroll"

export type NavSection = {
  id: string
  label: string
}

type Props = {
  brand: string
  sections: NavSection[]
}

export default function StickyNav({ brand, sections }: Props) {
  const navRef = useRef<HTMLElement | null>(null)
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")
  const [open, setOpen] = useState(false)

  const observerIds = useMemo(() => sections.map((s) => s.id), [sections])

  const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

  useIsomorphicLayoutEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const apply = () => {
      const h = nav.getBoundingClientRect().height
      document.documentElement.style.setProperty("--nav-h", `${Math.round(h)}px`)
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(nav)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const elements = observerIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]

        const id = visible?.target?.id
        if (id) setActiveId(id)
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.55],
        rootMargin: "-20% 0px -65% 0px",
      },
    )

    elements.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [observerIds])

  const go = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <>
      <header
        ref={navRef}
        className="sticky top-0 z-40"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-4 sm:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
            <button
              type="button"
              onClick={() => go("top")}
              className="group inline-flex items-center gap-3 rounded-2xl px-2 py-1 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
              aria-label="Back to top"
            >
              <img
                src="/tiny-titan-logo.png"
                alt=""
                className="h-8 w-8 rounded-xl opacity-95 shadow-[0_10px_40px_rgba(0,0,0,0.55)]"
              />
              <span className="font-grotesk text-sm uppercase tracking-[0.22em] text-cream">
                {brand}
              </span>
            </button>

            <nav
              className="hidden items-center justify-self-center rounded-full px-2 py-2 liquid-glass lg:flex"
              aria-label="Primary"
            >
              <div className="flex max-w-[min(46vw,640px)] items-center gap-1 overflow-hidden">
                {sections.map((s) => {
                  const active = s.id === activeId
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => go(s.id)}
                      className={[
                        "relative shrink-0 rounded-full px-3 py-2 font-grotesk text-[13px] uppercase tracking-[0.18em]",
                        "text-cream/75 hover:text-neon motion-safe:transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
                        active
                          ? "text-neon after:absolute after:inset-x-3 after:-bottom-[3px] after:h-px after:bg-neon after:opacity-80"
                          : "",
                      ].join(" ")}
                    >
                      {s.label}
                    </button>
                  )
                })}
              </div>
            </nav>

            <div className="flex items-center justify-end gap-2">
              <div className="hidden flex-nowrap items-center gap-2 lg:flex">
              <a
                href="mailto:press@tinytitan.game"
                className="liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                aria-label="X"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l16 16" />
                  <path d="M20 4 4 20" />
                </svg>
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="liquid-glass glass-float inline-flex h-10 w-10 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.25 5.71.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="liquid-glass glass-float inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 lg:hidden"
                aria-label="Open navigation"
              >
                <span className="text-base leading-none" aria-hidden="true">
                  ≡
                </span>
                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <ModalDrawer open={open} onClose={() => setOpen(false)} title="Navigate">
        <div className="grid gap-2">
          {sections.map((s) => {
            const active = s.id === activeId
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => go(s.id)}
                className={[
                  "liquid-glass glass-float w-full rounded-2xl px-4 py-4 text-left font-grotesk text-[14px] uppercase tracking-[0.18em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60",
                  active
                    ? "text-neon"
                    : "text-cream/80 hover:text-neon",
                ].join(" ")}
              >
                {s.label}
              </button>
            )
          })}
        </div>
      </ModalDrawer>
    </>
  )
}
