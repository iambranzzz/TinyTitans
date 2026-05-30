import { RepeatWrapping, SRGBColorSpace, Texture, TextureLoader } from "three"

export type PrototypeAssets = {
  microTexture: Texture | null
}

export const loadPrototypeAssets = async (): Promise<PrototypeAssets> => {
  const loader = new TextureLoader()
  try {
    const microTexture = await loader.loadAsync("/micro-texture.png")
    microTexture.wrapS = RepeatWrapping
    microTexture.wrapT = RepeatWrapping
    microTexture.colorSpace = SRGBColorSpace
    microTexture.needsUpdate = true
    return { microTexture }
  } catch {
    return { microTexture: null }
  }
}
