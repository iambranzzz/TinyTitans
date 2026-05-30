import planetsJson from "./planets.json"
import weaponsJson from "./weapons.json"
import creaturesJson from "./creatures.json"
import mountsJson from "./mounts.json"
import loreJson from "./lore.json"
import type { Content } from "./types"
import { validateContentSources, type ContentValidationResult, type ValidationIssue } from "./validate"

export type ContentLoadResult =
  | { ok: true; content: Content; issues: ValidationIssue[] }
  | { ok: false; issues: ValidationIssue[] }

export const loadBundledContent = (): ContentLoadResult => {
  const result: ContentValidationResult = validateContentSources({
    planets: planetsJson as unknown,
    weapons: weaponsJson as unknown,
    creatures: creaturesJson as unknown,
    mounts: mountsJson as unknown,
    lore: loreJson as unknown
  })
  if (result.ok) return result
  return { ok: false, issues: result.issues }
}
