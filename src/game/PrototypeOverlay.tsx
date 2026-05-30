import { useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import { useLockBodyScroll } from "../hooks/useLockBodyScroll"
import { startPrototypeEngine, type PrototypeRuntime } from "./engine"

type Props = {
  open: boolean
  onClose: () => void
}

export default function PrototypeOverlay({ open, onClose }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null)

  const container = useMemo(() => {
    if (typeof document === "undefined") return null
    return document.body
  }, [])

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (!open) return
    if (!hostRef.current) return

    let alive = true
    let runtime: PrototypeRuntime | null = null

    startPrototypeEngine(hostRef.current).then((r) => {
      if (!alive) {
        r.dispose()
        return
      }
      runtime = r
    })

    return () => {
      alive = false
      runtime?.dispose()
    }
  }, [open])

  if (!open || !container) return null

  return createPortal(
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-ink-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(111,255,0,0.16),transparent_52%),radial-gradient(circle_at_72%_22%,rgba(255,69,195,0.14),transparent_58%),linear-gradient(180deg,rgba(1,8,40,0.6),rgba(1,8,40,0.96))]" />
      </div>

      <div ref={hostRef} className="absolute inset-0" />

      <div className="absolute inset-x-0 top-0 z-10 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <div className="min-w-0">
            <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
              Prototype
            </div>
            <div className="mt-1 truncate font-grotesk text-lg uppercase tracking-[0.08em] text-cream">
              Tiny Titan Arena
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="liquid-glass glass-float inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.16em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60"
          >
            <span className="text-base leading-none">×</span>
            <span>Exit</span>
          </button>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-cover bg-center opacity-40 mix-blend-lighten"
        style={{ backgroundImage: "url(/texture.png)" }}
      />
    </div>,
    container,
  )
}
