import type {
  Content,
  Creature,
  CreatureRole,
  LoreCategory,
  LoreEntry,
  LoreRelated,
  Mount,
  MountTraversal,
  Planet,
  PlanetEnvironment,
  PlanetPointOfInterest,
  Weapon,
  WeaponCategory
} from "./types"

export type ValidationIssue = {
  path: string
  message: string
}

export type ContentValidationResult =
  | { ok: true; content: Content; issues: ValidationIssue[] }
  | { ok: false; issues: ValidationIssue[] }

type ReadContext = {
  issues: ValidationIssue[]
  path: string
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value)

const pushIssue = (ctx: ReadContext, path: string, message: string) => {
  ctx.issues.push({ path: path ? `${ctx.path}.${path}` : ctx.path, message })
}

const readString = (value: unknown, ctx: ReadContext, path: string): string | null => {
  if (typeof value === "string" && value.length > 0) return value
  pushIssue(ctx, path, "Expected non-empty string")
  return null
}

const readNumber = (value: unknown, ctx: ReadContext, path: string): number | null => {
  if (typeof value === "number" && Number.isFinite(value)) return value
  pushIssue(ctx, path, "Expected number")
  return null
}

const readStringArray = (value: unknown, ctx: ReadContext, path: string): string[] | null => {
  if (!Array.isArray(value)) {
    pushIssue(ctx, path, "Expected string[]")
    return null
  }
  const out: string[] = []
  for (let i = 0; i < value.length; i++) {
    const item = value[i]
    if (typeof item === "string" && item.length > 0) out.push(item)
    else pushIssue(ctx, `${path}[${i}]`, "Expected non-empty string")
  }
  return out
}

const readEnum = <T extends string>(
  value: unknown,
  allowed: readonly T[],
  ctx: ReadContext,
  path: string
): T | null => {
  if (typeof value === "string" && (allowed as readonly string[]).includes(value)) return value as T
  pushIssue(ctx, path, `Expected one of: ${allowed.join(", ")}`)
  return null
}

const readArray = (value: unknown, ctx: ReadContext, path: string): unknown[] | null => {
  if (Array.isArray(value)) return value
  pushIssue(ctx, path, "Expected array")
  return null
}

const readRecord = (value: unknown, ctx: ReadContext, path: string): Record<string, unknown> | null => {
  if (isRecord(value)) return value
  pushIssue(ctx, path, "Expected object")
  return null
}

const parsePlanets = (raw: unknown, issues: ValidationIssue[]): Planet[] | null => {
  const ctx: ReadContext = { issues, path: "planets" }
  const arr = readArray(raw, ctx, "")
  if (!arr) return null

  const planets: Planet[] = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    const itemCtx: ReadContext = { issues, path: `planets[${i}]` }
    const obj = readRecord(item, itemCtx, "")
    if (!obj) continue

    const id = readString(obj.id, itemCtx, "id")
    const name = readString(obj.name, itemCtx, "name")
    const tagline = readString(obj.tagline, itemCtx, "tagline")
    const description = readString(obj.description, itemCtx, "description")

    const envObj = readRecord(obj.environment, itemCtx, "environment")
    let environment: PlanetEnvironment | null = null
    if (envObj) {
      const envCtx: ReadContext = { issues, path: `${itemCtx.path}.environment` }
      const biome = readString(envObj.biome, envCtx, "biome")
      const atmosphere = readString(envObj.atmosphere, envCtx, "atmosphere")
      const hazards = readStringArray(envObj.hazards, envCtx, "hazards")
      const resources = readStringArray(envObj.resources, envCtx, "resources")
      if (biome && atmosphere && hazards && resources) {
        environment = { biome, atmosphere, hazards, resources }
      }
    }

    const poiArr = readArray(obj.pointsOfInterest, itemCtx, "pointsOfInterest")
    const pointsOfInterest: PlanetPointOfInterest[] = []
    if (poiArr) {
      for (let j = 0; j < poiArr.length; j++) {
        const poiItem = poiArr[j]
        const poiCtx: ReadContext = { issues, path: `${itemCtx.path}.pointsOfInterest[${j}]` }
        const poiObj = readRecord(poiItem, poiCtx, "")
        if (!poiObj) continue
        const poiId = readString(poiObj.id, poiCtx, "id")
        const poiName = readString(poiObj.name, poiCtx, "name")
        const detail = readString(poiObj.detail, poiCtx, "detail")
        if (poiId && poiName && detail) pointsOfInterest.push({ id: poiId, name: poiName, detail })
      }
    }

    const nativeCreatureIds = readStringArray(obj.nativeCreatureIds, itemCtx, "nativeCreatureIds")

    if (id && name && tagline && description && environment && nativeCreatureIds) {
      planets.push({
        id,
        name,
        tagline,
        description,
        environment,
        pointsOfInterest,
        nativeCreatureIds
      })
    }
  }
  return planets
}

const parseWeapons = (raw: unknown, issues: ValidationIssue[]): Weapon[] | null => {
  const ctx: ReadContext = { issues, path: "weapons" }
  const arr = readArray(raw, ctx, "")
  if (!arr) return null

  const weapons: Weapon[] = []
  const categories: readonly WeaponCategory[] = ["weapon", "gadget"]
  for (let i = 0; i < arr.length; i++) {
    const itemCtx: ReadContext = { issues, path: `weapons[${i}]` }
    const obj = readRecord(arr[i], itemCtx, "")
    if (!obj) continue

    const id = readString(obj.id, itemCtx, "id")
    const name = readString(obj.name, itemCtx, "name")
    const category = readEnum(obj.category, categories, itemCtx, "category")
    const tagline = readString(obj.tagline, itemCtx, "tagline")
    const description = readString(obj.description, itemCtx, "description")
    const primaryEffect = readString(obj.primaryEffect, itemCtx, "primaryEffect")
    const secondaryEffect = readString(obj.secondaryEffect, itemCtx, "secondaryEffect")
    const energySource = readString(obj.energySource, itemCtx, "energySource")
    const unlockHint = readString(obj.unlockHint, itemCtx, "unlockHint")

    if (
      id &&
      name &&
      category &&
      tagline &&
      description &&
      primaryEffect &&
      secondaryEffect &&
      energySource &&
      unlockHint
    ) {
      weapons.push({
        id,
        name,
        category,
        tagline,
        description,
        primaryEffect,
        secondaryEffect,
        energySource,
        unlockHint
      })
    }
  }
  return weapons
}

const parseCreatures = (raw: unknown, issues: ValidationIssue[]): Creature[] | null => {
  const ctx: ReadContext = { issues, path: "creatures" }
  const arr = readArray(raw, ctx, "")
  if (!arr) return null

  const creatures: Creature[] = []
  const roles: readonly CreatureRole[] = ["hostile", "neutral", "passive"]
  for (let i = 0; i < arr.length; i++) {
    const itemCtx: ReadContext = { issues, path: `creatures[${i}]` }
    const obj = readRecord(arr[i], itemCtx, "")
    if (!obj) continue

    const id = readString(obj.id, itemCtx, "id")
    const name = readString(obj.name, itemCtx, "name")
    const role = readEnum(obj.role, roles, itemCtx, "role")
    const behavior = readString(obj.behavior, itemCtx, "behavior")
    const fieldNote = readString(obj.fieldNote, itemCtx, "fieldNote")
    const habitatPlanetIds = readStringArray(obj.habitatPlanetIds, itemCtx, "habitatPlanetIds")
    const dangerRating = readNumber(obj.dangerRating, itemCtx, "dangerRating")
    const tags = readStringArray(obj.tags, itemCtx, "tags")

    if (dangerRating !== null && (dangerRating < 1 || dangerRating > 5)) {
      pushIssue(itemCtx, "dangerRating", "Expected dangerRating to be between 1 and 5")
    }

    if (id && name && role && behavior && fieldNote && habitatPlanetIds && dangerRating !== null && tags) {
      creatures.push({
        id,
        name,
        role,
        behavior,
        fieldNote,
        habitatPlanetIds,
        dangerRating,
        tags
      })
    }
  }
  return creatures
}

const parseMounts = (raw: unknown, issues: ValidationIssue[]): Mount[] | null => {
  const ctx: ReadContext = { issues, path: "mounts" }
  const arr = readArray(raw, ctx, "")
  if (!arr) return null

  const mounts: Mount[] = []
  const traversals: readonly MountTraversal[] = ["ground", "air", "burrow", "water"]
  for (let i = 0; i < arr.length; i++) {
    const itemCtx: ReadContext = { issues, path: `mounts[${i}]` }
    const obj = readRecord(arr[i], itemCtx, "")
    if (!obj) continue

    const id = readString(obj.id, itemCtx, "id")
    const name = readString(obj.name, itemCtx, "name")
    const tagline = readString(obj.tagline, itemCtx, "tagline")
    const traversal = readEnum(obj.traversal, traversals, itemCtx, "traversal")
    const capabilities = readStringArray(obj.capabilities, itemCtx, "capabilities")
    const habitatPlanetIds = readStringArray(obj.habitatPlanetIds, itemCtx, "habitatPlanetIds")
    const temperament = readString(obj.temperament, itemCtx, "temperament")
    const handling = readString(obj.handling, itemCtx, "handling")
    const topSpeedRating = readNumber(obj.topSpeedRating, itemCtx, "topSpeedRating")
    const travelFantasy = readString(obj.travelFantasy, itemCtx, "travelFantasy")

    if (topSpeedRating !== null && (topSpeedRating < 1 || topSpeedRating > 5)) {
      pushIssue(itemCtx, "topSpeedRating", "Expected topSpeedRating to be between 1 and 5")
    }

    if (
      id &&
      name &&
      tagline &&
      traversal &&
      capabilities &&
      habitatPlanetIds &&
      temperament &&
      handling &&
      topSpeedRating !== null &&
      travelFantasy
    ) {
      mounts.push({
        id,
        name,
        tagline,
        traversal,
        capabilities,
        habitatPlanetIds,
        temperament,
        handling,
        topSpeedRating,
        travelFantasy
      })
    }
  }
  return mounts
}

const parseLore = (raw: unknown, issues: ValidationIssue[]): LoreEntry[] | null => {
  const ctx: ReadContext = { issues, path: "lore" }
  const arr = readArray(raw, ctx, "")
  if (!arr) return null

  const lore: LoreEntry[] = []
  const categories: readonly LoreCategory[] = ["history", "tech", "mystery"]
  for (let i = 0; i < arr.length; i++) {
    const itemCtx: ReadContext = { issues, path: `lore[${i}]` }
    const obj = readRecord(arr[i], itemCtx, "")
    if (!obj) continue

    const id = readString(obj.id, itemCtx, "id")
    const title = readString(obj.title, itemCtx, "title")
    const category = readEnum(obj.category, categories, itemCtx, "category")
    const snippet = readString(obj.snippet, itemCtx, "snippet")
    const body = readString(obj.body, itemCtx, "body")
    const tags = readStringArray(obj.tags, itemCtx, "tags")

    const relatedObj = readRecord(obj.related, itemCtx, "related")
    let related: LoreRelated | null = null
    if (relatedObj) {
      const relCtx: ReadContext = { issues, path: `${itemCtx.path}.related` }
      const planets = readStringArray(relatedObj.planets, relCtx, "planets") ?? []
      const weapons = readStringArray(relatedObj.weapons, relCtx, "weapons") ?? []
      const creatures = readStringArray(relatedObj.creatures, relCtx, "creatures") ?? []
      const mounts = readStringArray(relatedObj.mounts, relCtx, "mounts") ?? []
      related = { planets, weapons, creatures, mounts }
    }

    if (id && title && category && snippet && body && tags && related) {
      lore.push({ id, title, category, snippet, body, tags, related })
    }
  }
  return lore
}

const validateUniqueIds = (kind: string, ids: string[], issues: ValidationIssue[]) => {
  const seen = new Set<string>()
  for (const id of ids) {
    if (seen.has(id)) issues.push({ path: kind, message: `Duplicate id: ${id}` })
    seen.add(id)
  }
}

const validateRefs = (kind: string, refs: string[], known: Set<string>, issues: ValidationIssue[], path: string) => {
  for (const ref of refs) {
    if (!known.has(ref)) issues.push({ path, message: `${kind} references missing id: ${ref}` })
  }
}

export const validateContentSources = (sources: {
  planets: unknown
  weapons: unknown
  creatures: unknown
  mounts: unknown
  lore: unknown
}): ContentValidationResult => {
  const issues: ValidationIssue[] = []

  const planets = parsePlanets(sources.planets, issues)
  const weapons = parseWeapons(sources.weapons, issues)
  const creatures = parseCreatures(sources.creatures, issues)
  const mounts = parseMounts(sources.mounts, issues)
  const lore = parseLore(sources.lore, issues)

  if (!planets || !weapons || !creatures || !mounts || !lore) {
    return { ok: false, issues }
  }

  validateUniqueIds("planets", planets.map((p) => p.id), issues)
  validateUniqueIds("weapons", weapons.map((w) => w.id), issues)
  validateUniqueIds("creatures", creatures.map((c) => c.id), issues)
  validateUniqueIds("mounts", mounts.map((m) => m.id), issues)
  validateUniqueIds("lore", lore.map((l) => l.id), issues)

  const planetIds = new Set(planets.map((p) => p.id))
  const weaponIds = new Set(weapons.map((w) => w.id))
  const creatureIds = new Set(creatures.map((c) => c.id))
  const mountIds = new Set(mounts.map((m) => m.id))

  for (let i = 0; i < planets.length; i++) {
    validateRefs(
      "Planet.nativeCreatureIds",
      planets[i].nativeCreatureIds,
      creatureIds,
      issues,
      `planets[${i}].nativeCreatureIds`
    )
  }

  for (let i = 0; i < creatures.length; i++) {
    validateRefs(
      "Creature.habitatPlanetIds",
      creatures[i].habitatPlanetIds,
      planetIds,
      issues,
      `creatures[${i}].habitatPlanetIds`
    )
  }

  for (let i = 0; i < mounts.length; i++) {
    validateRefs(
      "Mount.habitatPlanetIds",
      mounts[i].habitatPlanetIds,
      planetIds,
      issues,
      `mounts[${i}].habitatPlanetIds`
    )
  }

  for (let i = 0; i < lore.length; i++) {
    validateRefs("Lore.related.planets", lore[i].related.planets, planetIds, issues, `lore[${i}].related.planets`)
    validateRefs("Lore.related.weapons", lore[i].related.weapons, weaponIds, issues, `lore[${i}].related.weapons`)
    validateRefs(
      "Lore.related.creatures",
      lore[i].related.creatures,
      creatureIds,
      issues,
      `lore[${i}].related.creatures`
    )
    validateRefs("Lore.related.mounts", lore[i].related.mounts, mountIds, issues, `lore[${i}].related.mounts`)
  }

  if (issues.length > 0) return { ok: false, issues }

  return { ok: true, content: { planets, weapons, creatures, mounts, lore }, issues }
}
