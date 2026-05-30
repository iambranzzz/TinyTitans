import {
  Color,
  DirectionalLight,
  FogExp2,
  HemisphereLight,
  IcosahedronGeometry,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
} from "three"
import type { PrototypeConfig } from "./config"
import type { PrototypeAssets } from "./loader"

export type PrototypeSceneBundle = {
  scene: Scene
  camera: PerspectiveCamera
  update: (dt: number, elapsed: number) => void
  dispose: () => void
}

export const createPrototypeScene = (
  assets: PrototypeAssets,
  config: PrototypeConfig,
): PrototypeSceneBundle => {
  const scene = new Scene()
  scene.background = new Color(config.clearColor)
  scene.fog = new FogExp2(new Color(config.clearColor), 0.08)

  const camera = new PerspectiveCamera(config.fov, 1, 0.1, 220)
  camera.position.set(config.cameraPosition.x, config.cameraPosition.y, config.cameraPosition.z)
  camera.lookAt(0, 1.2, 0)

  const hemi = new HemisphereLight(0xa9ccff, 0x150a28, 0.95)
  scene.add(hemi)

  const key = new DirectionalLight(0xffffff, 1.35)
  key.position.set(7.5, 11.5, 6.5)
  key.castShadow = false
  scene.add(key)

  const groundGeo = new PlaneGeometry(60, 60, 1, 1)
  const groundMat = new MeshStandardMaterial({
    color: 0x071035,
    roughness: 0.95,
    metalness: 0.0,
    map: assets.microTexture ?? undefined,
  })
  if (assets.microTexture) {
    assets.microTexture.repeat.set(6, 6)
  }
  const ground = new Mesh(groundGeo, groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = 0
  scene.add(ground)

  const titanGeo = new IcosahedronGeometry(1.05, 2)
  const titanMat = new MeshPhysicalMaterial({
    color: 0xdaf7ff,
    roughness: 0.24,
    metalness: 0.06,
    clearcoat: 1,
    clearcoatRoughness: 0.28,
    emissive: new Color(0x083cff),
    emissiveIntensity: 0.25,
  })
  const titan = new Mesh(titanGeo, titanMat)
  titan.position.set(0, 1.25, 0)
  scene.add(titan)

  const update = (dt: number, elapsed: number) => {
    titan.rotation.y += dt * 0.55
    titan.rotation.x = Math.sin(elapsed * 0.65) * 0.08
    key.position.x = 7.5 + Math.sin(elapsed * 0.35) * 1.7
    key.position.z = 6.5 + Math.cos(elapsed * 0.35) * 1.7
    camera.lookAt(0, 1.1, 0)
  }

  const dispose = () => {
    groundGeo.dispose()
    titanGeo.dispose()
    groundMat.dispose()
    titanMat.dispose()
  }

  return { scene, camera, update, dispose }
}
