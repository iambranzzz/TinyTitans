export type PrototypeConfig = {
  clearColor: number
  dprCap: number
  particleCap: number
  fov: number
  cameraPosition: { x: number; y: number; z: number }
  arenaRadius: number
  reducedMotion: boolean
  respawnDelay: number
  player: {
    radius: number
    maxHealth: number
    maxSpeed: number
    accel: number
    friction: number
    invulnAfterHit: number
    knockback: number
  }
  camera: {
    distance: number
    pitch: number
    minPitch: number
    maxPitch: number
    follow: number
    sensitivity: number
  }
  enemies: {
    count: number
    spawnRadius: number
    detectRange: number
    separation: number
    attackRange: number
    attackCooldown: number
    damage: number
    maxSpeed: number
    accel: number
  }
}

export const defaultPrototypeConfig: PrototypeConfig = {
  clearColor: 0x010828,
  dprCap: 1.75,
  particleCap: 120,
  fov: 56,
  cameraPosition: { x: 0, y: 1.9, z: 7.4 },
  arenaRadius: 26,
  reducedMotion: false,
  respawnDelay: 1.6,
  player: {
    radius: 1.05,
    maxHealth: 120,
    maxSpeed: 8.4,
    accel: 26,
    friction: 16,
    invulnAfterHit: 0.35,
    knockback: 3.9,
  },
  camera: {
    distance: 9.25,
    pitch: 0.32,
    minPitch: 0.12,
    maxPitch: 0.72,
    follow: 10,
    sensitivity: 0.0033,
  },
  enemies: {
    count: 4,
    spawnRadius: 18,
    detectRange: 14,
    separation: 1.3,
    attackRange: 1.15,
    attackCooldown: 1.8,
    damage: 4,
    maxSpeed: 2.55,
    accel: 7.8,
  },
}

export const resolvePrototypeConfig = (partial?: Partial<PrototypeConfig>): PrototypeConfig => {
  const reducedMotion =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  return {
    ...defaultPrototypeConfig,
    ...partial,
    reducedMotion: partial?.reducedMotion ?? reducedMotion,
    cameraPosition: {
      ...defaultPrototypeConfig.cameraPosition,
      ...(partial?.cameraPosition ?? {}),
    },
    player: {
      ...defaultPrototypeConfig.player,
      ...(partial?.player ?? {}),
    },
    camera: {
      ...defaultPrototypeConfig.camera,
      ...(partial?.camera ?? {}),
    },
    enemies: {
      ...defaultPrototypeConfig.enemies,
      ...(partial?.enemies ?? {}),
    },
  }
}
