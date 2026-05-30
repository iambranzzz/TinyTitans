import { type ReactNode, useEffect, useMemo, useRef } from "react"
import { createPortal } from "react-dom"
import { useLockBodyScroll } from "../hooks/useLockBodyScroll"
import { useMediaQuery } from "../hooks/useMediaQuery"

type Props = {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}

export default function ModalDrawer({ open, title, onClose, children }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const dialogRef = useRef<HTMLDivElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)

  const container = useMemo(() => {
    if (typeof document === "undefined") return null
    return document.body
  }, [])

  useLockBodyScroll(open)

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
      if (e.key === "Escape") onClose()
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
  }, [open, onClose])

  if (!open || !container) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50"
      aria-hidden={!open}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        className={[
          "absolute liquid-glass rounded-3xl shadow-[0_35px_130px_rgba(0,0,0,0.75)]",
          isDesktop
            ? "left-1/2 top-1/2 w-[min(92vw,720px)] -translate-x-1/2 -translate-y-1/2"
            : "inset-x-0 bottom-0 w-full rounded-b-none rounded-t-3xl",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={dialogRef}
      >
        <div className="flex items-start justify-between gap-4 border-b border-cream/10 px-5 py-4 sm:px-6">
          <div className="min-w-0">
            <div className="font-grotesk text-[12px] uppercase tracking-[0.18em] text-cream/55">
              Detail
            </div>
            <div className="mt-1 truncate font-grotesk text-xl uppercase tracking-[0.06em] text-cream">
              {title}
            </div>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="liquid-glass glass-float inline-flex h-11 w-11 items-center justify-center rounded-full text-cream/75 hover:text-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-0"
            aria-label="Close"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              ×
            </span>
          </button>
        </div>

        <div className="max-h-[70vh] overflow-auto px-5 py-5 sm:max-h-[75vh] sm:px-6">{children}</div>
      </div>
    </div>,
    container,
  )
}
