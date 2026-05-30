import { Box3, Group, RepeatWrapping, SRGBColorSpace, Texture, TextureLoader, Vector3 } from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

export type PrototypeAssets = {
  microTexture: Texture | null
  models: PrototypeModels
}

export type PrototypeModelId = "player" | "enemy-chaser" | "enemy-skirter"

export type PrototypeModels = Record<PrototypeModelId, Group | null>

const modelUrlById: Record<PrototypeModelId, string[]> = {
  player: ["/models/player.glb"],
  "enemy-chaser": ["/models/enemy-chaser.glb"],
  "enemy-skirter": ["/models/enemy-skirter.glb", "/models/enemy-skitter.glb"],
}

const targetHeightById: Record<PrototypeModelId, number> = {
  player: 2.1,
  "enemy-chaser": 1.45,
  "enemy-skirter": 1.35,
}

const normalizeModelRoot = (source: Group, targetHeight: number): Group => {
  const root = source.clone(true) as Group
  const box = new Box3().setFromObject(root)
  const size = new Vector3()
  box.getSize(size)
  const height = Math.max(1e-6, size.y)
  const scalar = targetHeight / height
  root.scale.setScalar(scalar)

  const scaledBox = new Box3().setFromObject(root)
  const center = new Vector3()
  scaledBox.getCenter(center)
  root.position.x -= center.x
  root.position.z -= center.z
  root.position.y -= scaledBox.min.y
  root.updateMatrixWorld(true)
  return root
}

export const loadPrototypeModels = async (): Promise<PrototypeModels> => {
  const loader = new GLTFLoader()
  const out: PrototypeModels = { player: null, "enemy-chaser": null, "enemy-skirter": null }

  const loadAny = async (urls: string[]) => {
    for (const url of urls) {
      try {
        return await loader.loadAsync(url)
      } catch {}
    }
    return null
  }

  const ids: PrototypeModelId[] = ["player", "enemy-chaser", "enemy-skirter"]
  await Promise.all(
    ids.map(async (id) => {
      const gltf = await loadAny(modelUrlById[id])
      if (!gltf) return
      const scene = gltf.scene
      if (!scene) return
      const group = new Group()
      group.add(scene)
      out[id] = normalizeModelRoot(group, targetHeightById[id])
    }),
  )

  return out
}

export const disposePrototypeModels = (models: PrototypeModels) => {
  const disposeMaterial = (material: unknown) => {
    if (!material || typeof material !== "object") return
    const maybe = material as { dispose?: () => void; map?: unknown; emissiveMap?: unknown; normalMap?: unknown }
    const maps = [maybe.map, maybe.emissiveMap, maybe.normalMap]
    for (const map of maps) {
      const tex = map as { dispose?: () => void } | undefined
      tex?.dispose?.()
    }
    maybe.dispose?.()
  }

  for (const model of Object.values(models)) {
    if (!model) continue
    model.traverse((obj) => {
      const mesh = obj as { geometry?: unknown; material?: unknown }
      const geo = mesh.geometry as { dispose?: () => void } | undefined
      geo?.dispose?.()
      const mat = mesh.material as unknown
      if (Array.isArray(mat)) {
        for (const entry of mat) disposeMaterial(entry)
      } else {
        disposeMaterial(mat)
      }
    })
  }
}

export const loadPrototypeAssets = async (): Promise<PrototypeAssets> => {
  const loader = new TextureLoader()
  const modelsPromise = loadPrototypeModels()
  try {
    const microTexture = await loader.loadAsync("/micro-texture.png")
    microTexture.wrapS = RepeatWrapping
    microTexture.wrapT = RepeatWrapping
    microTexture.colorSpace = SRGBColorSpace
    microTexture.needsUpdate = true
    const models = await modelsPromise.catch(() => ({ player: null, "enemy-chaser": null, "enemy-skirter": null }))
    return { microTexture, models }
  } catch {
    const models = await modelsPromise.catch(() => ({ player: null, "enemy-chaser": null, "enemy-skirter": null }))
    return { microTexture: null, models }
  }
}
