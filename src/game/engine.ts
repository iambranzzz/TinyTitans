import { Clock, SRGBColorSpace, WebGLRenderer } from "three"
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
  const bundle = createPrototypeScene(assets, config)

  const renderer = new WebGLRenderer({ antialias: true })
  renderer.outputColorSpace = SRGBColorSpace
  renderer.setClearColor(config.clearColor, 1)
  renderer.domElement.style.width = "100%"
  renderer.domElement.style.height = "100%"
  renderer.domElement.style.display = "block"
  container.appendChild(renderer.domElement)

  const clock = new Clock()
  let frame = 0
  let disposed = false

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

  const tick = () => {
    if (disposed) return
    const dt = clock.getDelta()
    const elapsed = clock.elapsedTime
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
    bundle.dispose()
    assets.microTexture?.dispose()
    renderer.dispose()
    renderer.domElement.remove()
  }

  return { dispose }
}
