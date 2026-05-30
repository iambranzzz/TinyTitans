import { type RefObject, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"

type Props = {
  onExploreUniverse: () => void
}

export default function TrailerHero({ onExploreUniverse }: Props) {
  const embedUrl = (import.meta.env as { VITE_PIXVERSE_EMBED_URL?: string }).VITE_PIXVERSE_EMBED_URL
  const trailerSrc = embedUrl?.trim() || "/trailer.mp4"
  const [open, setOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const inlineFullscreenRef = useRef<HTMLDivElement>(null)
  const modalFullscreenRef = useRef<HTMLDivElement>(null)
  const inlineVideoRef = useRef<HTMLVideoElement | null>(null)
  const modalVideoRef = useRef<HTMLVideoElement | null>(null)

  const container = useMemo(() => {
    if (typeof document === "undefined") return null
    return document.body
  }, [])

  const canRequestFullscreen = typeof document !== "undefined" && Boolean(document.fullscreenEnabled)

  const isDirectVideoUrl = (value?: string) => {
    const src = value?.trim()
    if (!src) return false
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(src)
  }

  useEffect(() => {
    const onChange = () => {
      if (typeof document === "undefined") return
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener("fullscreenchange", onChange)
    return () => document.removeEventListener("fullscreenchange", onChange)
  }, [])

  useEffect(() => {
    if (!open) return

    const prevActive = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    return () => {
      prevActive?.focus()
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        setOpen(false)
        return
      }

      if (e.key !== "Tab") return
      if (!dialogRef.current) return

      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
      )
      const list = Array.from(focusables).filter((el) => !el.hasAttribute("disabled"))
      if (list.length === 0) return

      const first = list[0]
      const last = list[list.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  useEffect(() => {
    if (!open) return
    return () => {
      if (typeof document === "undefined") return
      if (!document.fullscreenElement) return
      void document.exitFullscreen().catch(() => {})
    }
  }, [open])

  const Player = ({
    title,
    fullscreenRef,
  }: {
    title: string
    fullscreenRef: RefObject<HTMLDivElement>
  }) => {
    const src = trailerSrc
    const isVideo = isDirectVideoUrl(src)
    return (
      <div className="liquid-glass relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-neon/8 via-cream/5 to-transparent" />
        <div className="relative">
          <div className="flex items-center justify-between gap-4 border-b border-cream/10 px-4 py-4 sm:px-6">
            <div className="min-w-0">
              <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                Trailer
              </div>
              <div className="mt-1 truncate font-grotesk text-[14px] uppercase tracking-[0.12em] text-cream/85">
                {title}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="glass-float inline-flex items-center justify-center rounded-full bg-neon px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_60px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
              >
                Play
              </button>
              <button
                type="button"
                onClick={async () => {
                  const target = isVideo ? inlineVideoRef.current : fullscreenRef.current
                  if (!target) return
                  if (!canRequestFullscreen) return
                  await target.requestFullscreen().catch(() => {})
                }}
                disabled={!canRequestFullscreen}
                className="liquid-glass glass-float inline-flex items-center justify-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Fullscreen
              </button>
            </div>
          </div>

          <div ref={fullscreenRef} className="relative aspect-video w-full">
            {src ? (
              isVideo ? (
                <video
                  ref={inlineVideoRef}
                  className="absolute inset-0 h-full w-full"
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : (
                <iframe
                  title="Tiny Titan trailer"
                  className="absolute inset-0 h-full w-full"
                  src={src}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              )
            ) : null}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-bg/55 to-transparent" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <section id="trailer" className="section-anchor relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-[0.08] blur-[0.5px] motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/atmosphere-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute -top-48 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-r from-neon/10 via-cream/6 to-transparent blur-3xl" />
          <div className="absolute -bottom-72 left-1/2 h-[620px] w-[960px] -translate-x-1/2 rounded-full bg-gradient-to-r from-cream/5 via-neon/8 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/75">
                <span className="h-1.5 w-1.5 rounded-full bg-neon/85 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]" />
                <span>Reveal Trailer</span>
              </div>
              <div className="relative mt-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-7 left-0 font-condiment text-5xl text-neon/70 mix-blend-screen sm:-top-10 sm:text-6xl"
                >
                  Neon Drift
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/tiny-titan-logo.png"
                    alt=""
                    className="h-14 w-14 rounded-3xl opacity-95 shadow-[0_18px_70px_rgba(0,0,0,0.55)] sm:h-16 sm:w-16"
                  />
                  <h1 className="text-balance font-grotesk text-5xl uppercase tracking-[0.06em] text-cream sm:text-6xl">
                    Tiny Titan
                  </h1>
                </div>
              </div>
              <p className="mt-5 max-w-xl text-pretty font-grotesk text-lg uppercase tracking-[0.14em] text-cream/80 sm:text-xl">
                Small Explorer. Massive Adventure.
              </p>
              <p className="mt-3 max-w-xl text-pretty font-mono text-base leading-relaxed text-cream/65 sm:text-lg">
                Watch the cinematic reveal, then scroll through planets, gadgets, mounts, and field
                notes from the edges of the map.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="glass-float inline-flex items-center justify-center rounded-full bg-neon px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-bg shadow-[0_18px_70px_rgba(111,255,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                >
                  Watch Trailer
                </button>
                <button
                  type="button"
                  onClick={onExploreUniverse}
                  className="liquid-glass glass-float inline-flex items-center justify-center rounded-full px-6 py-3 font-grotesk text-[13px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                >
                  Explore the Universe
                </button>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="flex items-start gap-3 rounded-3xl liquid-glass p-5 font-mono text-sm text-cream/65">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-neon/80 shadow-[0_0_0_3px_rgba(111,255,0,0.10)]" />
                  <div className="leading-relaxed">
                  Best with audio. Fullscreen is available via browser support or the player controls.
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="mailto:press@tinytitan.game"
                    className="liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
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
                    className="liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
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
                    className="liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/70 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.84 1.18 3.1 0 4.44-2.69 5.42-5.25 5.71.41.35.77 1.05.77 2.12v3.14c0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-5 rounded-3xl bg-gradient-to-b from-neon/10 via-cream/5 to-transparent blur-2xl" />
              <div className="relative">
                <Player title="Cinematic reveal" fullscreenRef={inlineFullscreenRef} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && container
        ? createPortal(
            <div
              className="fixed inset-0 z-50"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) setOpen(false)
              }}
              aria-hidden={!open}
            >
              <div className="absolute inset-0 bg-black/65 backdrop-blur-md" />
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Trailer player"
                className="absolute inset-0 mx-auto flex max-w-6xl items-center justify-center px-4 py-10 sm:px-8"
              >
                <div className="liquid-glass w-full overflow-hidden rounded-[28px] shadow-[0_45px_160px_rgba(0,0,0,0.78)]">
                  <div className="flex items-center justify-between gap-3 border-b border-cream/10 px-4 py-4 sm:px-6">
                    <div className="min-w-0">
                      <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
                        Cinematic Trailer
                      </div>
                      <div className="mt-1 truncate font-grotesk text-[14px] uppercase tracking-[0.12em] text-cream/85">
                        Tiny Titan — Reveal
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={async () => {
                          const target = isDirectVideoUrl(trailerSrc) ? modalVideoRef.current : modalFullscreenRef.current
                          if (!target) return
                          if (isFullscreen) {
                            if (typeof document === "undefined") return
                            await document.exitFullscreen().catch(() => {})
                            return
                          }
                          if (!canRequestFullscreen) return
                          await target.requestFullscreen().catch(() => {})
                        }}
                        disabled={!canRequestFullscreen}
                        className="liquid-glass glass-float inline-flex items-center justify-center rounded-full px-4 py-2 font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                      </button>
                      <button
                        ref={closeRef}
                        type="button"
                        onClick={() => setOpen(false)}
                        className="liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/75 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-0"
                        aria-label="Close"
                      >
                        <span aria-hidden="true" className="text-xl leading-none">
                          ×
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="px-4 py-4 sm:px-5 sm:py-5">
                    <div className="mx-auto w-full max-w-5xl">
                      <div
                        ref={modalFullscreenRef}
                        className="aspect-video w-full overflow-hidden rounded-3xl border border-cream/10 bg-black/45 shadow-[0_25px_100px_rgba(0,0,0,0.55)]"
                      >
                        <div className="h-full w-full">
                          {trailerSrc ? (
                            isDirectVideoUrl(trailerSrc) ? (
                              <video
                                ref={modalVideoRef}
                                className="h-full w-full"
                                src={trailerSrc}
                                controls
                                playsInline
                                autoPlay
                                preload="auto"
                              />
                            ) : (
                              <iframe
                                title="Tiny Titan trailer fullscreen"
                                className="h-full w-full"
                                src={trailerSrc}
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                              />
                            )
                          ) : (
                            <div className="grid h-full place-items-center px-6 text-center">
                              <div>
                                <div className="text-sm font-semibold text-white/90">Trailer unavailable</div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-white/55">
                        <div>Tip: Use the player controls for picture-in-picture where available.</div>
                        <div className="text-white/45">Esc closes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>,
            container,
          )
        : null}
    </>
  )
}
