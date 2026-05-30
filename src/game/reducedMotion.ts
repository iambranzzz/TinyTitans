export type ReducedMotionTracker = {
  get: () => boolean
  dispose: () => void
}

export const createReducedMotionTracker = (): ReducedMotionTracker => {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined") {
    return { get: () => false, dispose: () => {} }
  }

  const mql = window.matchMedia("(prefers-reduced-motion: reduce)")
  let value = mql.matches

  const onChange = (e: MediaQueryListEvent) => {
    value = e.matches
  }

  mql.addEventListener("change", onChange)

  const get = () => value
  const dispose = () => mql.removeEventListener("change", onChange)

  return { get, dispose }
}
