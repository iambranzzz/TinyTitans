import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useLockBodyScroll } from "../hooks/useLockBodyScroll"
import { startPrototypeEngine, type PrototypeRuntime } from "./engine"

type Props = {
  open: boolean
  onClose: () => void
}

const emptyHud = { health: 0, maxHealth: 1, dead: true, pointerLocked: false }

export default function PrototypeOverlay({ open, onClose }: Props) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const runtimeRef = useRef<PrototypeRuntime | null>(null)
  const closingRef = useRef(false)
  const [hud, setHud] = useState(emptyHud)

  const container = useMemo(() => {
    if (typeof document === "undefined") return null
    return document.body
  }, [])

  useLockBodyScroll(open)

  useEffect(() => {
    if (open) closingRef.current = false
  }, [open])

  const closeNow = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true
    runtimeRef.current?.dispose()
    runtimeRef.current = null
    if (typeof document !== "undefined" && document.pointerLockElement) {
      try {
        document.exitPointerLock()
      } catch {}
    }
    onClose()
  }, [onClose])

  const setVirtualMove = useCallback((x: number, y: number) => {
    runtimeRef.current?.setVirtualMove(x, y)
  }, [])

  const setTouchFire = useCallback((held: boolean) => {
    runtimeRef.current?.setFireHeld(held)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open, closeNow])

  useEffect(() => {
    if (!open) return
    if (!hostRef.current) return

    setHud(emptyHud)
    let alive = true
    let runtime: PrototypeRuntime | null = null
    let unsub: (() => void) | null = null

    startPrototypeEngine(hostRef.current)
      .then((r) => {
        if (!alive) {
          r.dispose()
          return
        }
        runtimeRef.current = r
        runtime = r
        setHud(r.getHudState())
        unsub = r.subscribeHud(setHud)
      })
      .catch(() => {})

    return () => {
      alive = false
      if (runtimeRef.current === runtime) runtimeRef.current = null
      unsub?.()
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: hud.pointerLocked ? 1 : 0.62 }}
      >
        <div className="relative h-11 w-11">
          <div className="absolute inset-0 rounded-full border border-neon/28 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_22px_rgba(111,255,0,0.18)]" />
          <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon shadow-[0_0_0_5px_rgba(111,255,0,0.08),0_0_28px_rgba(111,255,0,0.34)]" />
          <div className="absolute left-1/2 top-1/2 h-[2px] w-11 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cream/70 to-transparent opacity-90 shadow-[0_0_14px_rgba(174,247,255,0.16)]" />
          <div className="absolute left-1/2 top-1/2 h-11 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cream/70 to-transparent opacity-90 shadow-[0_0_14px_rgba(174,247,255,0.16)]" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="pointer-events-auto absolute left-4 top-4 w-[248px] rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl sm:left-6 sm:top-6">
          <div className="flex items-baseline justify-between gap-4">
            <div className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-cream/70">
              Health
            </div>
            <div className="font-mono text-[11px] text-cream/65">
              {Math.max(0, Math.round((hud.health / Math.max(1, hud.maxHealth)) * 100))}%
            </div>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[linear-gradient(90deg,rgba(111,255,0,0.95),rgba(128,246,255,0.9),rgba(255,69,195,0.9))] transition-[width,filter,opacity] duration-200"
              style={{
                width: `${Math.max(0, Math.min(1, hud.health / Math.max(1, hud.maxHealth))) * 100}%`,
                opacity: hud.dead ? 0.45 : 1,
                filter: hud.dead ? "saturate(0.65)" : "none",
              }}
            />
          </div>
          <div className="mt-2 font-mono text-[11px] text-cream/55">
            {hud.dead ? "Respawning…" : hud.pointerLocked ? "Mouse captured" : "Click to capture mouse"}
          </div>
        </div>

        <button
          type="button"
          onClick={closeNow}
          className="liquid-glass glass-float pointer-events-auto absolute right-4 top-4 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-grotesk text-[12px] uppercase tracking-[0.16em] text-cream/80 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 sm:right-6 sm:top-6"
        >
          <span className="text-base leading-none">×</span>
          <span>Exit</span>
        </button>

        <div className="pointer-events-auto absolute bottom-4 left-4 max-w-[320px] rounded-2xl border border-white/10 bg-black/30 px-4 py-3 font-mono text-[12px] leading-relaxed text-cream/70 backdrop-blur-xl sm:bottom-6 sm:left-6">
          <div className="font-grotesk text-[11px] uppercase tracking-[0.18em] text-cream/70">
            Controls
          </div>
          <div className="mt-2 grid gap-1">
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-cream/50">Move</span>
              <span>W forward · S back · A/D strafe</span>
            </div>
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-cream/50">Tip</span>
              <span>Follow the neon arrow ring for forward direction</span>
            </div>
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-cream/50">Look</span>
              <span>Mouse</span>
            </div>
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-cream/50">Shoot</span>
              <span>Left click</span>
            </div>
            <div className="flex gap-3">
              <span className="w-20 shrink-0 text-cream/50">Exit</span>
              <span>Esc</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto absolute bottom-4 right-4 grid touch-none select-none gap-3 sm:hidden">
          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-xl">
            <button
              type="button"
              aria-label="Move forward"
              onPointerDown={() => setVirtualMove(0, 1)}
              onPointerUp={() => setVirtualMove(0, 0)}
              onPointerCancel={() => setVirtualMove(0, 0)}
              className="col-start-2 grid h-12 w-12 place-items-center rounded-xl bg-white/10 font-grotesk text-lg text-cream/80"
            >
              ↑
            </button>
            <button
              type="button"
              aria-label="Move left"
              onPointerDown={() => setVirtualMove(-1, 0)}
              onPointerUp={() => setVirtualMove(0, 0)}
              onPointerCancel={() => setVirtualMove(0, 0)}
              className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 font-grotesk text-lg text-cream/80"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Move backward"
              onPointerDown={() => setVirtualMove(0, -1)}
              onPointerUp={() => setVirtualMove(0, 0)}
              onPointerCancel={() => setVirtualMove(0, 0)}
              className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 font-grotesk text-lg text-cream/80"
            >
              ↓
            </button>
            <button
              type="button"
              aria-label="Move right"
              onPointerDown={() => setVirtualMove(1, 0)}
              onPointerUp={() => setVirtualMove(0, 0)}
              onPointerCancel={() => setVirtualMove(0, 0)}
              className="grid h-12 w-12 place-items-center rounded-xl bg-white/10 font-grotesk text-lg text-cream/80"
            >
              →
            </button>
          </div>
          <button
            type="button"
            onPointerDown={() => setTouchFire(true)}
            onPointerUp={() => setTouchFire(false)}
            onPointerCancel={() => setTouchFire(false)}
            className="h-14 rounded-full bg-neon px-6 font-grotesk text-[12px] uppercase tracking-[0.16em] text-ink-950 shadow-[0_18px_60px_rgba(111,255,0,0.22)]"
          >
            Fire
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
