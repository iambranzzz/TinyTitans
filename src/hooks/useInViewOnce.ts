import { useEffect, useRef, useState } from "react"
import { prefersReducedMotion } from "../lib/scroll"

export function useInViewOnce<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(() => (typeof window === "undefined" ? true : prefersReducedMotion()))

  useEffect(() => {
    if (prefersReducedMotion()) {
      setVisible(true)
      return
    }

    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry?.isIntersecting) return
        setVisible(true)
        obs.disconnect()
      },
      { threshold: 0.12, rootMargin: "0px 0px -20% 0px", ...options },
    )

    obs.observe(node)
    return () => obs.disconnect()
  }, [options])

  return { ref, visible }
}
