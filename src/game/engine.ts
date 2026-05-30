import { Clock, SRGBColorSpace, Vector3, WebGLRenderer } from "three"
import { resolvePrototypeConfig, type PrototypeConfig } from "./config"
import { loadPrototypeAssets } from "./loader"
import { createPrototypeScene } from "./scene"

export type PrototypeRuntime = {
  dispose: () => void
}

export const startPrototypeEngine = async (
  container: HTMLElement,
  partialConfig?: Partial<PrototypeConfig>,
): Promise<PrototypeRuntime> => {
  const config = resolvePrototypeConfig(partialConfig)
  const assets = await loadPrototypeAssets()
  const renderer = new WebGLRenderer({ antialias: true })
  renderer.outputColorSpace = SRGBColorSpace
  renderer.setClearColor(config.clearColor, 1)
  renderer.domElement.style.width = "100%"
  renderer.domElement.style.height = "100%"
  renderer.domElement.style.display = "block"
  container.appendChild(renderer.domElement)

  const bundle = createPrototypeScene(assets, config, { canvas: renderer.domElement })
  const clock = new Clock()
  let frame = 0
  let disposed = false

  let fireHeld = false
  let fireQueued = false
  let nextShotAt = 0
  const fireCooldown = 0.12
  const scratchDir = new Vector3()

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return
    fireHeld = true
    fireQueued = true
  }

  const onPointerUp = (e: PointerEvent) => {
    if (e.button !== 0) return
    fireHeld = false
  }

  const onContextMenu = (e: MouseEvent) => {
    e.preventDefault()
  }

  const resize = () => {
    if (disposed) return
    const width = Math.max(1, container.clientWidth)
    const height = Math.max(1, container.clientHeight)
    const dpr = Math.min(window.devicePixelRatio || 1, config.dprCap)
    renderer.setPixelRatio(dpr)
    renderer.setSize(width, height, false)
    bundle.camera.aspect = width / height
    bundle.camera.updateProjectionMatrix()
  }

  const observer = new ResizeObserver(() => resize())
  observer.observe(container)
  resize()

  renderer.domElement.addEventListener("pointerdown", onPointerDown)
  window.addEventListener("pointerup", onPointerUp)
  renderer.domElement.addEventListener("contextmenu", onContextMenu)

  const tick = () => {
    if (disposed) return
    const dt = clock.getDelta()
    const elapsed = clock.elapsedTime

    if (fireQueued || (fireHeld && elapsed >= nextShotAt)) {
      bundle.camera.getWorldDirection(scratchDir)
      bundle.shoot(scratchDir)
      nextShotAt = elapsed + fireCooldown
      fireQueued = false
    }

    bundle.update(dt, elapsed)
    renderer.render(bundle.scene, bundle.camera)
    frame = window.requestAnimationFrame(tick)
  }

  frame = window.requestAnimationFrame(tick)

  const dispose = () => {
    if (disposed) return
    disposed = true
    observer.disconnect()
    window.cancelAnimationFrame(frame)
    renderer.domElement.removeEventListener("pointerdown", onPointerDown)
    window.removeEventListener("pointerup", onPointerUp)
    renderer.domElement.removeEventListener("contextmenu", onContextMenu)
    bundle.dispose()
    assets.microTexture?.dispose()
    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose }
}
