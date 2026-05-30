export type PrototypeInputState = {
  moveX: number
  moveY: number
  lookDX: number
  lookDY: number
  pointerLocked: boolean
  dragging: boolean
}

export type PrototypeInput = {
  getState: () => PrototypeInputState
  consumeLookDelta: () => { dx: number; dy: number }
  setVirtualMove: (x: number, y: number) => void
  dispose: () => void
}

const clampAxis = (v: number) => Math.max(-1, Math.min(1, v))
const gameKeys = new Set(["w", "a", "s", "d", "arrowup", "arrowdown", "arrowleft", "arrowright"])

export const createPrototypeInput = (canvas: HTMLCanvasElement): PrototypeInput => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    const getState = (): PrototypeInputState => ({
      moveX: 0,
      moveY: 0,
      lookDX: 0,
      lookDY: 0,
      pointerLocked: false,
      dragging: false,
    })
    return { getState, consumeLookDelta: () => ({ dx: 0, dy: 0 }), setVirtualMove: () => {}, dispose: () => {} }
  }
  if (!canvas || typeof (canvas as unknown as { addEventListener?: unknown }).addEventListener !== "function") {
    const getState = (): PrototypeInputState => ({
      moveX: 0,
      moveY: 0,
      lookDX: 0,
      lookDY: 0,
      pointerLocked: false,
      dragging: false,
    })
    return { getState, consumeLookDelta: () => ({ dx: 0, dy: 0 }), setVirtualMove: () => {}, dispose: () => {} }
  }

  const keys = new Set<string>()
  let dragging = false
  let pointerLocked = false
  let lookDX = 0
  let lookDY = 0
  let dragPrevX = 0
  let dragPrevY = 0
  let virtualMoveX = 0
  let virtualMoveY = 0

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    if (gameKeys.has(key)) e.preventDefault()
    keys.add(key)
  }

  const onKeyUp = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase()
    if (gameKeys.has(key)) e.preventDefault()
    keys.delete(key)
  }

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return
    canvas.focus()
    dragging = true
    dragPrevX = e.clientX
    dragPrevY = e.clientY
    try {
      canvas.setPointerCapture(e.pointerId)
    } catch {}
    if (canvas.requestPointerLock) {
      try {
        canvas.requestPointerLock()
      } catch {}
    }
  }

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging || pointerLocked) return
    const dx = e.clientX - dragPrevX
    const dy = e.clientY - dragPrevY
    dragPrevX = e.clientX
    dragPrevY = e.clientY
    lookDX += dx
    lookDY += dy
  }

  const onPointerUp = (e: PointerEvent) => {
    if (e.button !== 0) return
    dragging = false
    try {
      canvas.releasePointerCapture(e.pointerId)
    } catch {}
  }

  const onPointerCancel = () => {
    dragging = false
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!pointerLocked) return
    lookDX += e.movementX
    lookDY += e.movementY
  }

  const syncPointerLock = () => {
    pointerLocked = typeof document !== "undefined" && document.pointerLockElement === canvas
    dragging = false
  }

  const onPointerLockChange = () => syncPointerLock()
  const onPointerLockError = () => {
    pointerLocked = false
  }

  window.addEventListener("keydown", onKeyDown)
  window.addEventListener("keyup", onKeyUp)
  canvas.addEventListener("pointerdown", onPointerDown)
  canvas.addEventListener("pointermove", onPointerMove)
  canvas.addEventListener("pointerup", onPointerUp)
  canvas.addEventListener("pointercancel", onPointerCancel)
  document.addEventListener("pointerlockchange", onPointerLockChange)
  document.addEventListener("pointerlockerror", onPointerLockError)
  document.addEventListener("mousemove", onMouseMove)

  syncPointerLock()

  const getMoveAxis = () => {
    const w = keys.has("w") || keys.has("arrowup") ? 1 : 0
    const s = keys.has("s") || keys.has("arrowdown") ? 1 : 0
    const a = keys.has("a") || keys.has("arrowleft") ? 1 : 0
    const d = keys.has("d") || keys.has("arrowright") ? 1 : 0
    const x = clampAxis(d - a + virtualMoveX)
    const y = clampAxis(w - s + virtualMoveY)
    return { x, y }
  }

  const consumeLookDelta = () => {
    const dx = lookDX
    const dy = lookDY
    lookDX = 0
    lookDY = 0
    return { dx, dy }
  }

  const getState = (): PrototypeInputState => {
    const { x, y } = getMoveAxis()
    return { moveX: x, moveY: y, lookDX, lookDY, pointerLocked, dragging }
  }

  const setVirtualMove = (x: number, y: number) => {
    virtualMoveX = clampAxis(x)
    virtualMoveY = clampAxis(y)
  }

  const dispose = () => {
    window.removeEventListener("keydown", onKeyDown)
    window.removeEventListener("keyup", onKeyUp)
    canvas.removeEventListener("pointerdown", onPointerDown)
    canvas.removeEventListener("pointermove", onPointerMove)
    canvas.removeEventListener("pointerup", onPointerUp)
    canvas.removeEventListener("pointercancel", onPointerCancel)
    document.removeEventListener("pointerlockchange", onPointerLockChange)
    document.removeEventListener("pointerlockerror", onPointerLockError)
    document.removeEventListener("mousemove", onMouseMove)
    if (typeof document !== "undefined" && document.pointerLockElement === canvas) {
      try {
        document.exitPointerLock()
      } catch {}
    }
  }

  return { getState, consumeLookDelta, setVirtualMove, dispose }
}
