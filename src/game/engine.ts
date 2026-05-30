import { Clock, SRGBColorSpace, Vector3, WebGLRenderer } from "three"
import { resolvePrototypeConfig, type PrototypeConfig } from "./config"
import { loadPrototypeAssets } from "./loader"
import { createPrototypeScene, type PrototypeHudState } from "./scene"

export type PrototypeRuntime = {
  dispose: () => void
  getHudState: () => PrototypeHudState
  subscribeHud: (listener: (state: PrototypeHudState) => void) => () => void
}

const emptyHudState: PrototypeHudState = { health: 0, maxHealth: 0, dead: true, pointerLocked: false }
const emptyRuntime: PrototypeRuntime = {
  dispose: () => {},
  getHudState: () => emptyHudState,
  subscribeHud: () => () => {},
}

export const startPrototypeEngine = async (
  container: HTMLElement,
  partialConfig?: Partial<PrototypeConfig>,
): Promise<PrototypeRuntime> => {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return emptyRuntime
  }
  if (!container) {
    return emptyRuntime
  }

  const config = resolvePrototypeConfig(partialConfig)
  let assets: Awaited<ReturnType<typeof loadPrototypeAssets>> | null = null
  let renderer: WebGLRenderer | null = null
  let bundle: ReturnType<typeof createPrototypeScene> | null = null
  let observer: ResizeObserver | null = null
  let frame = 0
  let disposed = false
  const hudListeners = new Set<(state: PrototypeHudState) => void>()
  let nextHudAt = 0

  let onPointerDown: ((e: PointerEvent) => void) | null = null
  let onPointerUp: ((e: PointerEvent) => void) | null = null
  let onContextMenu: ((e: MouseEvent) => void) | null = null
  let onWindowResize: (() => void) | null = null

  const getHudState = (): PrototypeHudState =>
    bundle?.getHudState() ?? emptyHudState

  const subscribeHud = (listener: (state: PrototypeHudState) => void) => {
    hudListeners.add(listener)
    listener(getHudState())
    return () => hudListeners.delete(listener)
  }

  const dispose = () => {
    if (disposed) return
    disposed = true
    observer?.disconnect()
    window.cancelAnimationFrame(frame)
    if (renderer && onPointerDown) renderer.domElement.removeEventListener("pointerdown", onPointerDown)
    if (onPointerUp) window.removeEventListener("pointerup", onPointerUp)
    if (renderer && onContextMenu) renderer.domElement.removeEventListener("contextmenu", onContextMenu)
    if (onWindowResize) window.removeEventListener("resize", onWindowResize)
    hudListeners.clear()
    bundle?.dispose()
    assets?.microTexture?.dispose()
    renderer?.renderLists?.dispose?.()
    renderer?.dispose()
    try {
      renderer?.forceContextLoss()
    } catch {}
    if (typeof document !== "undefined" && document.pointerLockElement) {
      try {
        document.exitPointerLock()
      } catch {}
    }
    renderer?.domElement.remove()
  }

  try {
    assets = await loadPrototypeAssets()
    const createdRenderer = new WebGLRenderer({ antialias: true })
    renderer = createdRenderer
    createdRenderer.outputColorSpace = SRGBColorSpace
    createdRenderer.setClearColor(config.clearColor, 1)
    createdRenderer.domElement.style.width = "100%"
    createdRenderer.domElement.style.height = "100%"
    createdRenderer.domElement.style.display = "block"
    container.appendChild(createdRenderer.domElement)

    const createdBundle = createPrototypeScene(assets, config, { canvas: createdRenderer.domElement })
    bundle = createdBundle
    const clock = new Clock()
    const fixedStep = 1 / 60
    const maxDelta = 0.1
    const maxSubSteps = 4
    let accumulator = 0
    let simTime = 0

    let fireHeld = false
    let fireQueued = false
    let nextShotAt = 0
    const fireCooldown = 0.12
    const scratchDir = new Vector3()

    onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return
      fireHeld = true
      fireQueued = true
    }

    onPointerUp = (e: PointerEvent) => {
      if (e.button !== 0) return
      fireHeld = false
    }

    onContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const resize = () => {
      if (disposed) return
      const width = Math.max(1, container.clientWidth)
      const height = Math.max(1, container.clientHeight)
      const dpr = Math.min(window.devicePixelRatio || 1, config.dprCap, 2)
      createdRenderer.setPixelRatio(dpr)
      createdRenderer.setSize(width, height, false)
      createdBundle.camera.aspect = width / height
      createdBundle.camera.updateProjectionMatrix()
    }

    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => resize())
      observer.observe(container)
    } else {
      onWindowResize = () => resize()
      window.addEventListener("resize", onWindowResize)
    }
    resize()

    createdRenderer.domElement.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointerup", onPointerUp)
    createdRenderer.domElement.addEventListener("contextmenu", onContextMenu)

    const tick = () => {
      if (disposed) return
      const dt = Math.min(clock.getDelta(), maxDelta)
      accumulator += dt
      let steps = 0

      while (accumulator >= fixedStep && steps < maxSubSteps) {
        simTime += fixedStep
        createdBundle.update(fixedStep, simTime)

        if (fireQueued || (fireHeld && simTime >= nextShotAt)) {
          createdBundle.camera.getWorldDirection(scratchDir)
          createdBundle.shoot(scratchDir)
          nextShotAt = simTime + fireCooldown
          fireQueued = false
        }

        accumulator -= fixedStep
        steps += 1
      }

      if (steps === maxSubSteps) accumulator = 0

      createdRenderer.render(createdBundle.scene, createdBundle.camera)

      const elapsed = clock.elapsedTime
      if (hudListeners.size > 0 && elapsed >= nextHudAt) {
        const state = createdBundle.getHudState()
        for (const listener of hudListeners) listener(state)
        nextHudAt = elapsed + 0.12
      }

      frame = window.requestAnimationFrame(tick)
    }

    frame = window.requestAnimationFrame(tick)
  } catch {
    dispose()
    return emptyRuntime
  }

  return { dispose, getHudState, subscribeHud }
}
