import {
  AdditiveBlending,
  AmbientLight,
  BackSide,
  BoxGeometry,
  BufferGeometry,
  Color,
  ConeGeometry,
  CircleGeometry,
  CylinderGeometry,
  DirectionalLight,
  DoubleSide,
  Float32BufferAttribute,
  FogExp2,
  Group,
  HemisphereLight,
  IcosahedronGeometry,
  InstancedMesh,
  Material,
  MathUtils,
  MeshBasicMaterial,
  Mesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  OctahedronGeometry,
  Object3D,
  PlaneGeometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Shape,
  ShapeGeometry,
  SphereGeometry,
  TorusGeometry,
  Vector3,
} from "three"
import type { PrototypeConfig } from "./config"
import type { PrototypeAssets } from "./loader"
import { createPrototypeInput } from "./input"
import { createReducedMotionTracker } from "./reducedMotion"

type FlashMaterialEntry = {
  material: Material
  baseColor: Color | null
  baseEmissive: Color | null
  baseEmissiveIntensity: number | null
}

const flashWhite = new Color(0xffffff)

const collectFlashMaterials = (root: Object3D): FlashMaterialEntry[] => {
  const entries: FlashMaterialEntry[] = []
  const seen = new Set<Material>()
  root.traverse((obj) => {
    const maybe = obj as { material?: unknown }
    const mat = maybe.material as Material | Material[] | undefined
    if (!mat) return
    const mats = Array.isArray(mat) ? mat : [mat]
    for (const entry of mats) {
      if (!entry || seen.has(entry)) continue
      seen.add(entry)
      const anyMat = entry as unknown as {
        color?: unknown
        emissive?: unknown
        emissiveIntensity?: unknown
      }
      const baseColor = anyMat.color instanceof Color ? anyMat.color.clone() : null
      const baseEmissive = anyMat.emissive instanceof Color ? anyMat.emissive.clone() : null
      const baseEmissiveIntensity = typeof anyMat.emissiveIntensity === "number" ? anyMat.emissiveIntensity : null
      entries.push({ material: entry, baseColor, baseEmissive, baseEmissiveIntensity })
    }
  })
  return entries
}

const applyFlash = (entries: FlashMaterialEntry[], t: number, boost: number) => {
  const amount = Math.max(0, Math.min(1, t))
  for (const entry of entries) {
    const anyMat = entry.material as unknown as {
      color?: unknown
      emissive?: unknown
      emissiveIntensity?: unknown
    }
    if (entry.baseEmissive && anyMat.emissive instanceof Color) {
      anyMat.emissive.copy(flashWhite)
      if (entry.baseEmissiveIntensity !== null && typeof anyMat.emissiveIntensity === "number") {
        anyMat.emissiveIntensity = entry.baseEmissiveIntensity + amount * boost
      }
      continue
    }
    if (entry.baseColor && anyMat.color instanceof Color) {
      anyMat.color.copy(entry.baseColor).lerp(flashWhite, amount)
    }
  }
}

const resetFlash = (entries: FlashMaterialEntry[]) => {
  for (const entry of entries) {
    const anyMat = entry.material as unknown as {
      color?: unknown
      emissive?: unknown
      emissiveIntensity?: unknown
    }
    if (entry.baseEmissive && anyMat.emissive instanceof Color) {
      anyMat.emissive.copy(entry.baseEmissive)
      if (entry.baseEmissiveIntensity !== null && typeof anyMat.emissiveIntensity === "number") {
        anyMat.emissiveIntensity = entry.baseEmissiveIntensity
      }
      continue
    }
    if (entry.baseColor && anyMat.color instanceof Color) {
      anyMat.color.copy(entry.baseColor)
    }
  }
}

const instantiateModel = (source: Group) => {
  const root = source.clone(true) as Group
  const ownedMaterials = new Set<Material>()
  root.traverse((obj) => {
    const maybe = obj as { material?: unknown }
    const mat = maybe.material as Material | Material[] | undefined
    if (!mat) return
    if (Array.isArray(mat)) {
      const cloned = mat.map((entry) => {
        const next = entry.clone()
        ownedMaterials.add(next)
        return next
      })
      maybe.material = cloned
      return
    }
    const cloned = mat.clone()
    ownedMaterials.add(cloned)
    maybe.material = cloned
  })
  return { root, ownedMaterials }
}

type Projectile = {
  mesh: Mesh
  velocity: Vector3
  age: number
}

type EnemyArchetype = "chaser" | "skirter"

type Enemy = {
  archetype: EnemyArchetype
  mesh: Object3D
  radius: number
  velocity: Vector3
  hp: number
  maxHp: number
  maxSpeed: number
  accel: number
  orbitDistance: number
  attackCooldown: number
  flash: number
  flashMaterials: FlashMaterialEntry[]
  ownedMaterials: Set<Material>
}

export type PrototypeHudState = {
  health: number
  maxHealth: number
  dead: boolean
  pointerLocked: boolean
}

export type PrototypeSceneBundle = {
  scene: Scene
  camera: PerspectiveCamera
  shoot: (direction: Vector3) => void
  update: (dt: number, elapsed: number) => void
  getHudState: () => PrototypeHudState
  dispose: () => void
}

export const createPrototypeScene = (
  assets: PrototypeAssets,
  config: PrototypeConfig,
  options: { canvas: HTMLCanvasElement },
): PrototypeSceneBundle => {
  const scene = new Scene()
  scene.background = new Color(config.clearColor)
  scene.fog = new FogExp2(new Color(0x050c2b), 0.055)

  const camera = new PerspectiveCamera(config.fov, 1, 0.1, 220)
  camera.position.set(config.cameraPosition.x, config.cameraPosition.y, config.cameraPosition.z)
  camera.lookAt(0, 1.2, 0)
  scene.add(camera)

  const cameraBasePos = camera.position.clone()
  const damagePlaneGeo = new PlaneGeometry(1, 1)
  const damagePlaneMat = new MeshBasicMaterial({
    color: 0xff2b9a,
    transparent: true,
    opacity: 0,
    blending: AdditiveBlending,
    depthWrite: false,
  })
  const damagePlane = new Mesh(damagePlaneGeo, damagePlaneMat)
  damagePlane.position.z = -0.4
  damagePlane.renderOrder = 999
  camera.add(damagePlane)

  options.canvas.tabIndex = 0
  options.canvas.style.touchAction = "none"

  const hemi = new HemisphereLight(0xa9ccff, 0x1a052c, 0.95)
  scene.add(hemi)

  const key = new DirectionalLight(0xffffff, 1.35)
  key.position.set(7.5, 11.5, 6.5)
  key.castShadow = false
  scene.add(key)

  const fill = new DirectionalLight(0xff6bd6, 0.42)
  fill.position.set(-9.5, 6.0, -7.5)
  fill.castShadow = false
  scene.add(fill)

  const ambient = new AmbientLight(0x2a2b58, 0.22)
  scene.add(ambient)

  const arena = new Group()
  scene.add(arena)

  const arenaRadius = config.arenaRadius
  const arenaHeight = 6
  const domeMax = 0.85
  const bowlMax = 0.62

  const sliceGeo = new CylinderGeometry(arenaRadius * 0.985, arenaRadius * 1.02, arenaHeight, 72, 1)
  const slicePos = sliceGeo.attributes.position
  for (let i = 0; i < slicePos.count; i += 1) {
    const x = slicePos.getX(i)
    const y = slicePos.getY(i)
    const z = slicePos.getZ(i)
    const r = Math.sqrt(x * x + z * z)
    const t = Math.min(1, r / arenaRadius)
    const top = y > arenaHeight * 0.5 - 0.001
    const bottom = y < -arenaHeight * 0.5 + 0.001

    if (top) {
      const dome = (1 - t * t) * domeMax
      slicePos.setY(i, y + dome)
      continue
    }

    if (bottom) {
      const bowl = (1 - t * t) * bowlMax
      slicePos.setY(i, y - bowl)
      continue
    }

    const bulge = Math.sin(t * Math.PI) * 0.22
    const targetR = r + bulge
    const scale = r > 0.0001 ? targetR / r : 1
    slicePos.setX(i, x * scale)
    slicePos.setZ(i, z * scale)
  }
  slicePos.needsUpdate = true
  sliceGeo.computeVertexNormals()

  const sliceMat = new MeshStandardMaterial({
    color: 0x07143a,
    roughness: 0.92,
    metalness: 0.05,
    ...(assets.microTexture ? { map: assets.microTexture } : {}),
    emissive: new Color(0x031235),
    emissiveIntensity: 0.3,
  })
  if (assets.microTexture) assets.microTexture.repeat.set(6, 6)

  const slice = new Mesh(sliceGeo, sliceMat)
  slice.position.y = -(arenaHeight * 0.5 + domeMax)
  arena.add(slice)

  const atmosphereGeo = new IcosahedronGeometry(arenaRadius * 1.55, 3)
  const atmosphereMat = new MeshBasicMaterial({
    color: 0x64e5ff,
    transparent: true,
    opacity: 0.06,
    blending: AdditiveBlending,
    depthWrite: false,
    side: BackSide,
    fog: false,
  })
  const atmosphere = new Mesh(atmosphereGeo, atmosphereMat)
  atmosphere.position.y = 1.1
  scene.add(atmosphere)

  const reducedMotionTracker = createReducedMotionTracker()
  const getReducedMotion = () => config.reducedMotion || reducedMotionTracker.get()

  const input = createPrototypeInput(options.canvas)

  const surfaceY = (x: number, z: number) => {
    const r = Math.sqrt(x * x + z * z)
    const t = Math.min(1, r / arenaRadius)
    return -(domeMax * t * t)
  }

  const temp = new Object3D()

  const mushroomCount = 34
  const mushroomStemGeo = new CylinderGeometry(0.085, 0.12, 0.55, 6, 1)
  const mushroomCapGeo = new IcosahedronGeometry(0.26, 1)
  const mushroomStemMat = new MeshStandardMaterial({
    color: 0xc6f7ff,
    roughness: 0.78,
    metalness: 0.0,
    emissive: new Color(0x0b1b34),
    emissiveIntensity: 0.35,
  })
  const mushroomCapMat = new MeshStandardMaterial({
    color: 0xff63d3,
    roughness: 0.58,
    metalness: 0.07,
    emissive: new Color(0x36001e),
    emissiveIntensity: 0.55,
  })
  const mushroomStems = new InstancedMesh(mushroomStemGeo, mushroomStemMat, mushroomCount)
  const mushroomCaps = new InstancedMesh(mushroomCapGeo, mushroomCapMat, mushroomCount)
  arena.add(mushroomStems)
  arena.add(mushroomCaps)

  const crystalCount = 22
  const crystalGeo = new ConeGeometry(0.22, 1.15, 6, 1)
  const crystalMat = new MeshStandardMaterial({
    color: 0x66fff1,
    roughness: 0.35,
    metalness: 0.32,
    emissive: new Color(0x1662ff),
    emissiveIntensity: 0.72,
  })
  const crystals = new InstancedMesh(crystalGeo, crystalMat, crystalCount)
  arena.add(crystals)

  const rockCount = 16
  const rockGeo = new IcosahedronGeometry(0.62, 0)
  const rockMat = new MeshStandardMaterial({
    color: 0x0c1a45,
    roughness: 0.95,
    metalness: 0.02,
  })
  const rocks = new InstancedMesh(rockGeo, rockMat, rockCount)
  arena.add(rocks)

  const seeded = (i: number, mul: number) => ((Math.sin(i * 935.2 + mul * 1.73) + 1) * 0.5)

  for (let i = 0; i < mushroomCount; i += 1) {
    const a = seeded(i + 1, 2) * Math.PI * 2
    const rr = 8.0 + seeded(i + 4, 5) * 13.5
    const x = Math.cos(a) * rr
    const z = Math.sin(a) * rr
    const y = surfaceY(x, z)
    const stemH = 0.45 + seeded(i + 8, 3) * 0.28
    const stemScaleXZ = 0.9 + seeded(i + 6, 6) * 0.6

    temp.position.set(x, y + stemH * 0.5 + 0.02, z)
    temp.rotation.set(0, seeded(i + 2, 9) * Math.PI * 2, 0)
    temp.scale.set(stemScaleXZ, stemH / 0.55, stemScaleXZ)
    temp.updateMatrix()
    mushroomStems.setMatrixAt(i, temp.matrix)

    const capScale = 0.85 + seeded(i + 7, 7) * 0.7
    temp.position.set(x, y + stemH + 0.12, z)
    temp.rotation.set(seeded(i + 9, 1) * 0.35, seeded(i + 5, 8) * Math.PI * 2, seeded(i + 3, 2) * 0.25)
    temp.scale.set(capScale * 1.15, capScale * (0.72 + seeded(i + 10, 4) * 0.55), capScale * 1.1)
    temp.updateMatrix()
    mushroomCaps.setMatrixAt(i, temp.matrix)
  }
  mushroomStems.instanceMatrix.needsUpdate = true
  mushroomCaps.instanceMatrix.needsUpdate = true

  for (let i = 0; i < crystalCount; i += 1) {
    const a = seeded(i + 33, 4) * Math.PI * 2
    const rr = 14.2 + seeded(i + 22, 7) * 9.0
    const x = Math.cos(a) * rr
    const z = Math.sin(a) * rr
    const y = surfaceY(x, z)
    const s = 0.7 + seeded(i + 11, 8) * 1.15

    temp.position.set(x, y + 0.6 * s + 0.02, z)
    temp.rotation.set(seeded(i + 2, 5) * 0.45, seeded(i + 8, 2) * Math.PI * 2, seeded(i + 4, 1) * 0.35)
    temp.scale.set(0.95 * s, 1.25 * s, 0.95 * s)
    temp.updateMatrix()
    crystals.setMatrixAt(i, temp.matrix)
  }
  crystals.instanceMatrix.needsUpdate = true

  for (let i = 0; i < rockCount; i += 1) {
    const a = seeded(i + 61, 3) * Math.PI * 2
    const rr = 10.5 + seeded(i + 16, 2) * 12.5
    const x = Math.cos(a) * rr
    const z = Math.sin(a) * rr
    const y = surfaceY(x, z)
    const s = 0.85 + seeded(i + 31, 1) * 1.25

    temp.position.set(x, y + 0.24 * s + 0.02, z)
    temp.rotation.set(seeded(i + 6, 6) * Math.PI, seeded(i + 13, 7) * Math.PI * 2, seeded(i + 25, 9) * Math.PI)
    temp.scale.set(s, s * 0.85, s)
    temp.updateMatrix()
    rocks.setMatrixAt(i, temp.matrix)
  }
  rocks.instanceMatrix.needsUpdate = true

  let particles: Points | null = null
  let particleBase: Float32Array | null = null
  let particlePhase: Float32Array | null = null
  let particleSpeed: Float32Array | null = null
  const particleCount = Math.max(0, Math.min(140, config.particleCap))

  if (particleCount > 0) {
    const particleGeo = new BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    particleBase = new Float32Array(particleCount * 3)
    particlePhase = new Float32Array(particleCount)
    particleSpeed = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i += 1) {
      const a = seeded(i + 90, 1) * Math.PI * 2
      const rr = 7.5 + seeded(i + 12, 6) * 22.5
      const x = Math.cos(a) * rr
      const z = Math.sin(a) * rr
      const y = 0.5 + seeded(i + 3, 3) * 4.8
      const idx = i * 3
      positions[idx] = x
      positions[idx + 1] = y
      positions[idx + 2] = z
      particleBase[idx] = x
      particleBase[idx + 1] = y
      particleBase[idx + 2] = z
      particlePhase[i] = seeded(i + 44, 9) * Math.PI * 2
      particleSpeed[i] = 0.25 + seeded(i + 14, 8) * 0.38
    }

    particleGeo.setAttribute("position", new Float32BufferAttribute(positions, 3))
    const particleMat = new PointsMaterial({
      color: 0xa6fbff,
      size: 0.06,
      opacity: 0.55,
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      sizeAttenuation: true,
    })
    particles = new Points(particleGeo, particleMat)
    particles.position.y = 0.3
    particles.visible = !getReducedMotion()
    scene.add(particles)
  }

  const playerRadius = config.player.radius
  const titan = new Group()
  titan.position.set(0, surfaceY(0, 0) + playerRadius, 0)
  scene.add(titan)

  const titanVisual = new Group()
  titan.add(titanVisual)

  const titanSuitMat = new MeshPhysicalMaterial({
    color: 0xeaf8ff,
    roughness: 0.26,
    metalness: 0.06,
    clearcoat: 1,
    clearcoatRoughness: 0.24,
    emissive: new Color(0x083cff),
    emissiveIntensity: 0.22,
  })
  const titanTrimMat = new MeshStandardMaterial({
    color: 0x07143a,
    roughness: 0.78,
    metalness: 0.22,
    emissive: new Color(0x031235),
    emissiveIntensity: 0.2,
  })
  const titanVisorMat = new MeshBasicMaterial({ color: 0x6fff00, transparent: true, opacity: 0.85 })
  const titanEyeMat = new MeshBasicMaterial({ color: 0x01020c })

  const titanTorsoGeo = new CylinderGeometry(playerRadius * 0.48, playerRadius * 0.52, playerRadius * 0.72, 10, 1)
  const titanHelmetGeo = new SphereGeometry(playerRadius * 0.48, 24, 18)
  const titanBootGeo = new CylinderGeometry(playerRadius * 0.22, playerRadius * 0.26, playerRadius * 0.26, 8, 1)
  const titanPackGeo = new BoxGeometry(playerRadius * 0.42, playerRadius * 0.46, playerRadius * 0.22)
  const titanGunGeo = new CylinderGeometry(playerRadius * 0.13, playerRadius * 0.18, playerRadius * 0.62, 12, 1)
  const titanVisorGeo = new SphereGeometry(playerRadius * 0.21, 18, 12, 0.2, Math.PI * 0.6, 0.2, Math.PI * 0.6)
  const titanEyeGeo = new SphereGeometry(playerRadius * 0.06, 10, 10)

  const playerOwnedMaterials = new Set<Material>()
  const playerModel = assets.models.player
  if (playerModel) {
    const instance = instantiateModel(playerModel)
    for (const mat of instance.ownedMaterials) playerOwnedMaterials.add(mat)
    instance.root.position.y = -playerRadius
    titanVisual.add(instance.root)
  } else {
    const torso = new Mesh(titanTorsoGeo, titanSuitMat)
    torso.position.y = playerRadius * 0.26
    titanVisual.add(torso)

    const helmet = new Mesh(titanHelmetGeo, titanSuitMat)
    helmet.position.y = playerRadius * 0.78
    titanVisual.add(helmet)

    const visor = new Mesh(titanVisorGeo, titanVisorMat)
    visor.position.set(0, playerRadius * 0.78, playerRadius * 0.42)
    visor.rotation.y = Math.PI
    titanVisual.add(visor)

    const eyeL = new Mesh(titanEyeGeo, titanEyeMat)
    eyeL.position.set(-playerRadius * 0.14, playerRadius * 0.79, playerRadius * 0.44)
    titanVisual.add(eyeL)

    const eyeR = new Mesh(titanEyeGeo, titanEyeMat)
    eyeR.position.set(playerRadius * 0.14, playerRadius * 0.79, playerRadius * 0.44)
    titanVisual.add(eyeR)

    const bootL = new Mesh(titanBootGeo, titanTrimMat)
    bootL.position.set(-playerRadius * 0.24, playerRadius * 0.06, 0)
    titanVisual.add(bootL)

    const bootR = new Mesh(titanBootGeo, titanTrimMat)
    bootR.position.set(playerRadius * 0.24, playerRadius * 0.06, 0)
    titanVisual.add(bootR)

    const pack = new Mesh(titanPackGeo, titanTrimMat)
    pack.position.set(0, playerRadius * 0.44, -playerRadius * 0.46)
    titanVisual.add(pack)

    const gun = new Mesh(titanGunGeo, titanTrimMat)
    gun.rotation.x = Math.PI / 2
    gun.position.set(0, playerRadius * 0.42, playerRadius * 0.66)
    titanVisual.add(gun)
  }

  const aimRingGeo = new TorusGeometry(playerRadius * 0.22, playerRadius * 0.035, 10, 22)
  const aimRingMat = new MeshBasicMaterial({ color: 0xaef7ff, transparent: true, opacity: 0.75 })
  const aimRing = new Mesh(aimRingGeo, aimRingMat)
  aimRing.rotation.x = Math.PI / 2
  aimRing.position.set(0, playerRadius * 0.42, playerRadius * 0.95)
  titan.add(aimRing)

  const headingGeo = new TorusGeometry(playerRadius * 0.95, playerRadius * 0.045, 10, 48)
  const headingMat = new MeshBasicMaterial({
    color: 0x6fff00,
    transparent: true,
    opacity: 0.28,
    blending: AdditiveBlending,
    depthWrite: false,
  })
  const headingRing = new Mesh(headingGeo, headingMat)
  headingRing.rotation.x = Math.PI / 2
  headingRing.position.y = -playerRadius * 0.98 + 0.028
  titan.add(headingRing)

  const compassHaloGeo = new TorusGeometry(playerRadius * 1.12, playerRadius * 0.02, 10, 64)
  const compassHaloMat = new MeshBasicMaterial({
    color: 0xaef7ff,
    transparent: true,
    opacity: 0.12,
    blending: AdditiveBlending,
    depthWrite: false,
  })
  const compassHalo = new Mesh(compassHaloGeo, compassHaloMat)
  compassHalo.rotation.x = Math.PI / 2
  compassHalo.position.y = -playerRadius * 0.98 + 0.03
  titan.add(compassHalo)

  const compassPlateGeo = new CircleGeometry(playerRadius * 1.22, 64)
  const compassPlateMat = new MeshBasicMaterial({
    color: 0x01020c,
    transparent: true,
    opacity: 0.2,
    side: DoubleSide,
    depthWrite: false,
  })
  const compassPlate = new Mesh(compassPlateGeo, compassPlateMat)
  compassPlate.rotation.x = -Math.PI / 2
  compassPlate.position.y = -playerRadius * 0.98 + 0.016
  titan.add(compassPlate)

  const headingTickGeo = new BoxGeometry(playerRadius * 0.075, playerRadius * 0.012, playerRadius * 0.52)
  const headingTickMat = new MeshBasicMaterial({
    color: 0x6fff00,
    transparent: true,
    opacity: 0.68,
    blending: AdditiveBlending,
    depthWrite: false,
  })
  const headingTick = new Mesh(headingTickGeo, headingTickMat)
  headingTick.position.set(0, -playerRadius * 0.98 + 0.03, -playerRadius * 1.02)
  titan.add(headingTick)

  const arrowShape = new Shape()
  arrowShape.moveTo(0, 0.62)
  arrowShape.lineTo(0.34, 0.06)
  arrowShape.lineTo(0.13, 0.06)
  arrowShape.lineTo(0.13, -0.62)
  arrowShape.lineTo(-0.13, -0.62)
  arrowShape.lineTo(-0.13, 0.06)
  arrowShape.lineTo(-0.34, 0.06)
  arrowShape.closePath()
  const headingArrowGeo = new ShapeGeometry(arrowShape)
  const headingArrowMat = new MeshBasicMaterial({
    color: 0x6fff00,
    transparent: true,
    opacity: 0.86,
    blending: AdditiveBlending,
    depthWrite: false,
    side: DoubleSide,
  })
  const headingArrow = new Mesh(headingArrowGeo, headingArrowMat)
  headingArrow.rotation.x = -Math.PI / 2
  headingArrow.position.set(0, -playerRadius * 0.98 + 0.03, -playerRadius * 0.84)
  headingArrow.scale.setScalar(playerRadius * 0.88)
  titan.add(headingArrow)

  const playerFlashMaterials = collectFlashMaterials(titanVisual)

  let playerHealth = config.player.maxHealth
  let playerInvuln = 0
  let playerFlash = 0
  let damageFlash = 0
  let cameraShake = 0
  let respawnTimer = 0
  let dead = false

  const playerVelocity = new Vector3()
  const desiredVelocity = new Vector3()
  const desiredMoveDir = new Vector3()
  const forward = new Vector3()
  const right = new Vector3()
  const cameraTarget = new Vector3()
  const desiredCameraPos = new Vector3()

  let yaw = 0
  let pitch = 0.24
  const cameraDistance = Math.max(5.8, Math.hypot(config.cameraPosition.x, config.cameraPosition.z) || 7.4)

  const damp = (current: number, target: number, lambda: number, dt: number) => {
    if (lambda <= 0) return target
    const t = 1 - Math.exp(-lambda * dt)
    return current + (target - current) * t
  }

  const dampAngle = (current: number, target: number, lambda: number, dt: number) => {
    const tau = Math.PI * 2
    let delta = (target - current) % tau
    if (delta > Math.PI) delta -= tau
    if (delta < -Math.PI) delta += tau
    if (lambda <= 0) return target
    const t = 1 - Math.exp(-lambda * dt)
    return current + delta * t
  }

  const projectileGeo = new SphereGeometry(0.14, 18, 14)
  const projectileMat = new MeshPhysicalMaterial({
    color: 0xaef7ff,
    roughness: 0.08,
    metalness: 0.0,
    transmission: 0.85,
    thickness: 0.25,
    clearcoat: 1,
    clearcoatRoughness: 0.18,
    ior: 1.1,
    transparent: true,
    opacity: 0.72,
    emissive: new Color(0x2b74ff),
    emissiveIntensity: 0.15,
  })
  const projectileCoreGeo = new TorusGeometry(0.095, 0.02, 10, 20)
  const projectileCoreMat = new MeshBasicMaterial({ color: 0x6fff00, transparent: true, opacity: 0.65 })

  const projectileRadius = 0.14
  const projectileSpeed = 18
  const projectileLifetime = 1.35
  const projectiles: Projectile[] = []

  const enemyBodyGeo = new SphereGeometry(0.62, 18, 14)
  const enemyBellyGeo = new SphereGeometry(0.46, 16, 12)
  const enemyEarGeo = new ConeGeometry(0.2, 0.32, 7, 1)
  const enemyFinGeo = new ConeGeometry(0.22, 0.46, 6, 1)
  const enemyEyeGeo = new SphereGeometry(0.06, 10, 10)
  const enemyFaceGeo = new SphereGeometry(0.22, 14, 10)
  const enemyEyeMat = new MeshBasicMaterial({ color: 0x01020c })
  const enemySparkMat = new MeshBasicMaterial({ color: 0x6fff00, transparent: true, opacity: 0.55 })

  const chaserMatTemplate = new MeshStandardMaterial({
    color: 0xff62da,
    roughness: 0.55,
    metalness: 0.05,
    emissive: new Color(0x1a0630),
    emissiveIntensity: 0.28,
  })
  const skirterMatTemplate = new MeshStandardMaterial({
    color: 0x67fff1,
    roughness: 0.42,
    metalness: 0.18,
    emissive: new Color(0x033a55),
    emissiveIntensity: 0.34,
  })

  const enemies: Enemy[] = []

  const spawnEnemy = (archetype: EnemyArchetype, i: number) => {
    const mesh = new Group()
    const radius = archetype === "chaser" ? 0.82 : 0.74
    const maxHp = archetype === "chaser" ? 6 : 4
    const ownedMaterials = new Set<Material>()
    const modelId = archetype === "chaser" ? "enemy-chaser" : "enemy-skirter"
    const modelSource = assets.models[modelId]

    if (modelSource) {
      const instance = instantiateModel(modelSource)
      for (const mat of instance.ownedMaterials) ownedMaterials.add(mat)
      instance.root.position.y = -radius
      mesh.add(instance.root)
    } else {
      const material = (archetype === "chaser" ? chaserMatTemplate : skirterMatTemplate).clone()
      ownedMaterials.add(material)

      const eyeMat = enemyEyeMat.clone()
      ownedMaterials.add(eyeMat)

      const body = new Mesh(enemyBodyGeo, material)
      body.scale.setScalar(archetype === "chaser" ? 1.05 : 0.98)
      mesh.add(body)

      const belly = new Mesh(enemyBellyGeo, material)
      belly.position.set(0, -0.18, 0.18)
      belly.scale.setScalar(archetype === "chaser" ? 1.05 : 0.96)
      mesh.add(belly)

      const face = new Mesh(enemyFaceGeo, material)
      face.position.set(0, 0.1, 0.52)
      face.scale.set(1.1, 0.95, 0.9)
      mesh.add(face)

      const eyeL = new Mesh(enemyEyeGeo, eyeMat)
      eyeL.position.set(-0.14, 0.17, 0.7)
      mesh.add(eyeL)

      const eyeR = new Mesh(enemyEyeGeo, eyeMat)
      eyeR.position.set(0.14, 0.17, 0.7)
      mesh.add(eyeR)

      if (archetype === "chaser") {
        const earL = new Mesh(enemyEarGeo, material)
        earL.position.set(-0.34, 0.55, 0.1)
        earL.rotation.set(-0.6, 0.2, 0.25)
        mesh.add(earL)

        const earR = new Mesh(enemyEarGeo, material)
        earR.position.set(0.34, 0.55, 0.1)
        earR.rotation.set(-0.6, -0.2, -0.25)
        mesh.add(earR)
      } else {
        const finL = new Mesh(enemyFinGeo, material)
        finL.position.set(-0.5, 0.22, -0.05)
        finL.rotation.set(Math.PI / 2, 0.25, Math.PI / 3)
        finL.scale.set(0.9, 1.05, 0.9)
        mesh.add(finL)

        const finR = new Mesh(enemyFinGeo, material)
        finR.position.set(0.5, 0.22, -0.05)
        finR.rotation.set(Math.PI / 2, -0.25, -Math.PI / 3)
        finR.scale.set(0.9, 1.05, 0.9)
        mesh.add(finR)

        const sparkMat = enemySparkMat.clone()
        ownedMaterials.add(sparkMat)
        const spark = new Mesh(enemyEyeGeo, sparkMat)
        spark.position.set(0, 0.62, -0.2)
        spark.scale.setScalar(1.45)
        mesh.add(spark)
      }
    }

    const angle = seeded(i + 101, 3) * Math.PI * 2
    const rr = Math.min(arenaRadius - 4, config.enemies.spawnRadius) * (0.75 + seeded(i + 203, 7) * 0.25)
    const x = Math.cos(angle) * rr
    const z = Math.sin(angle) * rr
    mesh.position.set(x, surfaceY(x, z) + radius, z)
    arena.add(mesh)

    const flashMaterials = collectFlashMaterials(mesh)
    enemies.push({
      archetype,
      mesh,
      radius,
      velocity: new Vector3(),
      hp: maxHp,
      maxHp,
      maxSpeed: config.enemies.maxSpeed * (archetype === "chaser" ? 0.95 : 1.05),
      accel: config.enemies.accel * (archetype === "chaser" ? 0.9 : 1),
      orbitDistance: archetype === "chaser" ? 0 : 3.8,
      attackCooldown: 0,
      flash: 0,
      flashMaterials,
      ownedMaterials,
    })
  }

  for (let i = 0; i < config.enemies.count; i += 1) {
    spawnEnemy(i % 2 === 0 ? "chaser" : "skirter", i)
  }

  const scratchDir = new Vector3()
  const scratchOrigin = new Vector3()
  const scratchDelta = new Vector3()
  const scratchSteer = new Vector3()
  const scratchTangent = new Vector3()
  const scratchSeparation = new Vector3()
  const enemyDesiredVel = new Vector3()

  const shoot = (direction: Vector3) => {
    scratchDir.copy(direction)
    scratchDir.y = 0
    if (scratchDir.lengthSq() < 1e-6) return
    scratchDir.normalize()

    scratchOrigin.copy(titan.position).addScaledVector(scratchDir, 1.25)
    scratchOrigin.y = titan.position.y + 0.15

    const bubble = new Mesh(projectileGeo, projectileMat)
    bubble.position.copy(scratchOrigin)
    const core = new Mesh(projectileCoreGeo, projectileCoreMat)
    core.rotation.x = Math.PI / 2
    core.rotation.z = Math.PI / 4
    bubble.add(core)
    scene.add(bubble)
    projectiles.push({
      mesh: bubble,
      velocity: scratchDir.clone().multiplyScalar(projectileSpeed),
      age: 0,
    })
  }

  const clearProjectiles = () => {
    for (const projectile of projectiles) projectile.mesh.removeFromParent()
    projectiles.length = 0
  }

  const respawnEnemy = (target: Enemy, seed: number) => {
    target.hp = target.maxHp
    target.flash = 0
    target.velocity.set(0, 0, 0)
    target.attackCooldown = 0
    const angle = (seed + Math.random()) * Math.PI * 2
    const rr = Math.min(arenaRadius - 4, config.enemies.spawnRadius) * (0.7 + Math.random() * 0.3)
    const x = Math.cos(angle) * rr
    const z = Math.sin(angle) * rr
    target.mesh.position.set(x, surfaceY(x, z) + target.radius, z)
  }

  const hitEnemy = (target: Enemy, hitVelocity: Vector3) => {
    target.hp -= 1
    target.flash = 0.16
    scratchDir.copy(hitVelocity)
    scratchDir.y = 0
    if (scratchDir.lengthSq() > 1e-6) scratchDir.normalize()
    target.velocity.addScaledVector(scratchDir, 4.6)

    if (target.hp <= 0) respawnEnemy(target, Math.random())
  }

  const resetRun = () => {
    dead = false
    respawnTimer = 0
    playerHealth = config.player.maxHealth
    playerInvuln = 0
    playerFlash = 0
    damageFlash = 0
    cameraShake = 0
    titan.visible = true
    titan.position.set(0, surfaceY(0, 0) + playerRadius, 0)
    playerVelocity.set(0, 0, 0)
    clearProjectiles()
    for (let i = 0; i < enemies.length; i += 1) respawnEnemy(enemies[i], i / Math.max(1, enemies.length))
  }

  const damagePlayer = (amount: number, sourcePos: Vector3) => {
    if (dead) return
    if (playerInvuln > 0) return
    playerHealth = Math.max(0, playerHealth - amount)
    playerInvuln = config.player.invulnAfterHit
    playerFlash = 0.18
    damageFlash = 1
    if (!getReducedMotion()) cameraShake = Math.min(1, cameraShake + 1)
    scratchDelta.subVectors(titan.position, sourcePos)
    scratchDelta.y = 0
    if (scratchDelta.lengthSq() > 1e-6) {
      scratchDelta.normalize()
      playerVelocity.addScaledVector(scratchDelta, config.player.knockback)
    }
    if (playerHealth <= 0) {
      dead = true
      titan.visible = false
      playerVelocity.set(0, 0, 0)
      respawnTimer = config.respawnDelay
      clearProjectiles()
      for (const target of enemies) {
        target.velocity.set(0, 0, 0)
        target.attackCooldown = 0
      }
    }
  }

  const update = (dt: number, elapsed: number) => {
    const rm = getReducedMotion()
    if (rm) cameraShake = 0
    if (dead) {
      respawnTimer = Math.max(0, respawnTimer - dt)
      if (respawnTimer === 0) resetRun()
    }
    playerInvuln = Math.max(0, playerInvuln - dt)
    playerFlash = Math.max(0, playerFlash - dt)
    damageFlash = Math.max(0, damageFlash - dt * 2.25)
    cameraShake = Math.max(0, cameraShake - dt * 3.4)

    const { dx, dy } = input.consumeLookDelta()
    if (dx !== 0 || dy !== 0) {
      const sensitivity = rm ? 0.002 : 0.0016
      yaw += dx * sensitivity
      pitch -= dy * sensitivity
      pitch = Math.max(-0.75, Math.min(0.85, pitch))
    }

    const state = input.getState()
    const moveX = dead ? 0 : state.moveX
    const moveY = dead ? 0 : state.moveY
    const moveMag = Math.min(1, Math.hypot(moveX, moveY))

    desiredMoveDir.set(0, 0, 0)
    if (moveMag > 0) {
      forward.set(-Math.sin(yaw), 0, -Math.cos(yaw))
      right.set(-forward.z, 0, forward.x)
      desiredMoveDir
        .addScaledVector(right, moveX / moveMag)
        .addScaledVector(forward, moveY / moveMag)
        .normalize()
    }

    const maxSpeed = config.player.maxSpeed
    desiredVelocity.copy(desiredMoveDir).multiplyScalar(maxSpeed * moveMag)
    const velLambda = rm ? 180 : moveMag > 0 ? 18 : 10
    playerVelocity.set(
      damp(playerVelocity.x, desiredVelocity.x, velLambda, dt),
      0,
      damp(playerVelocity.z, desiredVelocity.z, velLambda, dt),
    )

    titan.position.x += playerVelocity.x * dt
    titan.position.z += playerVelocity.z * dt

    const clampRadius = arenaRadius - 1.5
    const r = Math.hypot(titan.position.x, titan.position.z)
    if (r > clampRadius) {
      const nx = titan.position.x / r
      const nz = titan.position.z / r
      titan.position.x = nx * clampRadius
      titan.position.z = nz * clampRadius
      const outward = playerVelocity.x * nx + playerVelocity.z * nz
      if (outward > 0) {
        playerVelocity.x -= outward * nx
        playerVelocity.z -= outward * nz
      }
    }

    titan.position.y = surfaceY(titan.position.x, titan.position.z) + playerRadius

    const lookForwardX = -Math.sin(yaw)
    const lookForwardZ = -Math.cos(yaw)
    const targetRot =
      moveMag > 0.05 ? Math.atan2(desiredMoveDir.x, desiredMoveDir.z) : Math.atan2(lookForwardX, lookForwardZ)
    titan.rotation.y = dampAngle(titan.rotation.y, targetRot, rm ? 180 : 18, dt)
    titan.rotation.x = rm ? 0 : Math.sin(elapsed * 0.65) * 0.08
    const headingPulse = rm ? 1 : 0.78 + 0.22 * Math.sin(elapsed * 2.1)
    headingMat.opacity = 0.22 + headingPulse * 0.18
    compassHaloMat.opacity = 0.06 + headingPulse * 0.1
    compassPlateMat.opacity = 0.14 + headingPulse * 0.08
    headingTickMat.opacity = 0.5 + headingPulse * 0.35
    headingArrowMat.opacity = 0.68 + headingPulse * 0.32
    const arrowScale = playerRadius * 0.88 * (rm ? 1 : 1 + 0.04 * Math.sin(elapsed * 2.1))
    headingArrow.scale.setScalar(arrowScale)
    if (playerFlash > 0) {
      const t = Math.min(1, playerFlash / 0.18)
      applyFlash(playerFlashMaterials, t, 2.15)
    } else {
      resetFlash(playerFlashMaterials)
    }

    if (!rm) {
      key.position.x = 7.5 + Math.sin(elapsed * 0.35) * 1.6
      key.position.z = 6.5 + Math.cos(elapsed * 0.35) * 1.6
      fill.position.x = -9.5 + Math.sin(elapsed * 0.25) * 1.0
      fill.position.z = -7.5 + Math.cos(elapsed * 0.25) * 1.0
    }

    cameraTarget.set(titan.position.x, titan.position.y + 0.35, titan.position.z)
    const cosPitch = Math.cos(pitch)
    desiredCameraPos
      .set(Math.sin(yaw) * cosPitch, Math.sin(pitch), Math.cos(yaw) * cosPitch)
      .multiplyScalar(cameraDistance)
      .add(cameraTarget)

    const camLambda = rm ? 240 : 14
    camera.position.set(
      damp(camera.position.x, desiredCameraPos.x, camLambda, dt),
      damp(camera.position.y, desiredCameraPos.y, camLambda, dt),
      damp(camera.position.z, desiredCameraPos.z, camLambda, dt),
    )
    if (!rm && cameraShake > 0) {
      const s = cameraShake * 0.18
      camera.position.x += (Math.random() * 2 - 1) * s
      camera.position.y += (Math.random() * 2 - 1) * s * 0.6
      camera.position.z += (Math.random() * 2 - 1) * s
    }
    camera.lookAt(cameraTarget)

    const planeDist = 0.35
    const planeH = 2 * Math.tan(MathUtils.degToRad(camera.fov * 0.5)) * planeDist
    const planeW = planeH * camera.aspect
    damagePlane.scale.set(planeW * 2.2, planeH * 2.2, 1)
    damagePlaneMat.opacity = Math.min(0.68, Math.pow(damageFlash, 1.35) * 0.6 + (dead ? 0.38 : 0))

    if (particles) particles.visible = !rm
    if (!rm && particles && particleBase && particlePhase && particleSpeed) {
      const attr = (particles.geometry as BufferGeometry).getAttribute("position") as Float32BufferAttribute
      for (let i = 0; i < particleCount; i += 1) {
        const idx = i * 3
        attr.array[idx] = particleBase[idx] + Math.sin(elapsed * 0.18 + particlePhase[i]) * 0.12
        attr.array[idx + 1] =
          particleBase[idx + 1] + Math.sin(elapsed * particleSpeed[i] + particlePhase[i]) * 0.22
        attr.array[idx + 2] = particleBase[idx + 2] + Math.cos(elapsed * 0.16 + particlePhase[i]) * 0.12
      }
      attr.needsUpdate = true
    }

    for (let i = projectiles.length - 1; i >= 0; i -= 1) {
      const projectile = projectiles[i]
      projectile.age += dt
      projectile.mesh.position.addScaledVector(projectile.velocity, dt)

      if (projectile.age >= projectileLifetime) {
        projectile.mesh.removeFromParent()
        projectiles.splice(i, 1)
        continue
      }

      let hit = false
      for (let e = 0; e < enemies.length; e += 1) {
        const target = enemies[e]
        scratchDelta.subVectors(projectile.mesh.position, target.mesh.position)
        const combined = projectileRadius + target.radius
        if (scratchDelta.lengthSq() <= combined * combined) {
          hitEnemy(target, projectile.velocity)
          hit = true
          break
        }
      }

      if (hit) {
        projectile.mesh.removeFromParent()
        projectiles.splice(i, 1)
      }
    }

    const separationRadius = config.enemies.separation
    const separationSq = separationRadius * separationRadius

    for (let e = 0; e < enemies.length; e += 1) {
      const target = enemies[e]
      target.attackCooldown = Math.max(0, target.attackCooldown - dt)

      scratchDelta.subVectors(titan.position, target.mesh.position)
      scratchDelta.y = 0
      const dist = Math.sqrt(scratchDelta.lengthSq())

      const active = !dead && dist <= config.enemies.detectRange
      if (active && dist > 1e-6) {
        scratchDir.copy(scratchDelta).multiplyScalar(1 / dist)
        if (target.archetype === "skirter") {
          scratchTangent.set(-scratchDir.z, 0, scratchDir.x)
          scratchDir.copy(scratchTangent)
          if (dist < target.orbitDistance) {
            scratchDir.addScaledVector(scratchDelta, -1 / Math.max(1e-6, dist))
          } else if (dist > target.orbitDistance) {
            scratchDir.addScaledVector(scratchDelta, 0.55 / Math.max(1e-6, dist))
          }
          if (scratchDir.lengthSq() > 1e-6) scratchDir.normalize()
        }
      } else {
        scratchDir.set(-target.mesh.position.z, 0, target.mesh.position.x)
        if (scratchDir.lengthSq() > 1e-6) scratchDir.normalize()
      }

      scratchSeparation.set(0, 0, 0)
      for (let j = 0; j < enemies.length; j += 1) {
        if (j === e) continue
        const other = enemies[j]
        scratchSteer.subVectors(target.mesh.position, other.mesh.position)
        scratchSteer.y = 0
        const dsq = scratchSteer.lengthSq()
        if (dsq <= 1e-6 || dsq >= separationSq) continue
        const d = Math.sqrt(dsq)
        scratchSeparation.addScaledVector(scratchSteer, (separationRadius - d) / (d * separationRadius))
      }
      if (scratchSeparation.lengthSq() > 1e-6) {
        scratchSeparation.normalize()
        scratchDir.addScaledVector(scratchSeparation, 0.85)
        if (scratchDir.lengthSq() > 1e-6) scratchDir.normalize()
      }

      const speed = active ? target.maxSpeed : target.maxSpeed * 0.42
      enemyDesiredVel.copy(scratchDir).multiplyScalar(speed)
      scratchSteer.subVectors(enemyDesiredVel, target.velocity)
      const maxDelta = target.accel * dt
      const maxDeltaSq = maxDelta * maxDelta
      if (scratchSteer.lengthSq() > maxDeltaSq) scratchSteer.setLength(maxDelta)
      target.velocity.add(scratchSteer)
      target.velocity.multiplyScalar(Math.exp(-dt * (rm ? 22 : 2.35)))

      target.mesh.position.addScaledVector(target.velocity, dt)
      const limit = arenaRadius - target.radius - 1.4
      const rr = Math.hypot(target.mesh.position.x, target.mesh.position.z)
      if (rr > limit) {
        const nx = target.mesh.position.x / rr
        const nz = target.mesh.position.z / rr
        target.mesh.position.x = nx * limit
        target.mesh.position.z = nz * limit
        const outward = target.velocity.x * nx + target.velocity.z * nz
        if (outward > 0) {
          target.velocity.x -= outward * nx
          target.velocity.z -= outward * nz
        }
      }

      target.mesh.position.y = surfaceY(target.mesh.position.x, target.mesh.position.z) + target.radius

      if (
        active &&
        target.attackCooldown <= 0 &&
        dist <= config.enemies.attackRange + target.radius + playerRadius
      ) {
        target.attackCooldown = config.enemies.attackCooldown * (target.archetype === "skirter" ? 1.15 : 1)
        damagePlayer(config.enemies.damage, target.mesh.position)
      }

      if (target.flash > 0) {
        target.flash = Math.max(0, target.flash - dt)
        const t = Math.min(1, target.flash / 0.16)
        applyFlash(target.flashMaterials, t, 2.2)
      } else {
        resetFlash(target.flashMaterials)
      }
    }
  }

  const getHudState = (): PrototypeHudState => ({
    health: playerHealth,
    maxHealth: config.player.maxHealth,
    dead,
    pointerLocked: input.getState().pointerLocked,
  })

  const dispose = () => {
    input.dispose()
    reducedMotionTracker.dispose()
    for (const projectile of projectiles) projectile.mesh.removeFromParent()
    projectiles.length = 0
    titan.removeFromParent()
    for (const mat of playerOwnedMaterials) mat.dispose()
    for (const target of enemies) {
      target.mesh.removeFromParent()
      for (const mat of target.ownedMaterials) mat.dispose()
    }
    enemies.length = 0

    sliceGeo.dispose()
    atmosphereGeo.dispose()
    mushroomStemGeo.dispose()
    mushroomCapGeo.dispose()
    crystalGeo.dispose()
    rockGeo.dispose()
    projectileGeo.dispose()
    projectileCoreGeo.dispose()
    enemyBodyGeo.dispose()
    enemyBellyGeo.dispose()
    enemyEarGeo.dispose()
    enemyFinGeo.dispose()
    enemyEyeGeo.dispose()
    enemyFaceGeo.dispose()
    titanTorsoGeo.dispose()
    titanHelmetGeo.dispose()
    titanBootGeo.dispose()
    titanPackGeo.dispose()
    titanGunGeo.dispose()
    titanVisorGeo.dispose()
    titanEyeGeo.dispose()
    aimRingGeo.dispose()
    headingGeo.dispose()
    compassHaloGeo.dispose()
    compassPlateGeo.dispose()
    headingTickGeo.dispose()
    headingArrowGeo.dispose()
    sliceMat.dispose()
    atmosphereMat.dispose()
    mushroomStemMat.dispose()
    mushroomCapMat.dispose()
    crystalMat.dispose()
    rockMat.dispose()
    ;(particles?.geometry as BufferGeometry | undefined)?.dispose()
    ;(particles?.material as PointsMaterial | undefined)?.dispose()
    damagePlaneGeo.dispose()
    damagePlaneMat.dispose()
    titanSuitMat.dispose()
    titanTrimMat.dispose()
    titanVisorMat.dispose()
    titanEyeMat.dispose()
    aimRingMat.dispose()
    headingMat.dispose()
    compassHaloMat.dispose()
    compassPlateMat.dispose()
    headingTickMat.dispose()
    headingArrowMat.dispose()
    projectileMat.dispose()
    projectileCoreMat.dispose()
    chaserMatTemplate.dispose()
    skirterMatTemplate.dispose()
    enemyEyeMat.dispose()
    enemySparkMat.dispose()
  }

  return { scene, camera, shoot, update, getHudState, dispose }
}
