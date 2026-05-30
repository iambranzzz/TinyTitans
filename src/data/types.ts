export type CreatureRole = "hostile" | "neutral" | "passive"

export type MountTraversal = "ground" | "air" | "burrow" | "water"

export type LoreCategory = "history" | "tech" | "mystery"

export type PlanetPointOfInterest = {
  id: string
  name: string
  detail: string
}

export type PlanetEnvironment = {
  biome: string
  atmosphere: string
  hazards: string[]
  resources: string[]
}

export type Planet = {
  id: string
  name: string
  tagline: string
  description: string
  environment: PlanetEnvironment
  pointsOfInterest: PlanetPointOfInterest[]
  nativeCreatureIds: string[]
}

export type WeaponCategory = "weapon" | "gadget"

export type Weapon = {
  id: string
  name: string
  category: WeaponCategory
  tagline: string
  description: string
  primaryEffect: string
  secondaryEffect: string
  energySource: string
  unlockHint: string
}

export type Creature = {
  id: string
  name: string
  role: CreatureRole
  behavior: string
  fieldNote: string
  habitatPlanetIds: string[]
  dangerRating: number
  tags: string[]
}

export type Mount = {
  id: string
  name: string
  tagline: string
  traversal: MountTraversal
  capabilities: string[]
  habitatPlanetIds: string[]
  temperament: string
  handling: string
  topSpeedRating: number
  travelFantasy: string
}

export type LoreRelated = {
  planets: string[]
  weapons: string[]
  creatures: string[]
  mounts: string[]
}

export type LoreEntry = {
  id: string
  title: string
  category: LoreCategory
  snippet: string
  body: string
  tags: string[]
  related: LoreRelated
}

export type Content = {
  planets: Planet[]
  weapons: Weapon[]
  creatures: Creature[]
  mounts: Mount[]
  lore: LoreEntry[]
}
