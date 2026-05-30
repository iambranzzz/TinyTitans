export type Tallies = Record<string, number>

export const selectionKey = "tinyTitan.communityVote.selection.v1"
export const talliesKey = "tinyTitan.communityVote.tallies.v1"

export type StorageLike = {
  getItem: (key: string) => string | null
  setItem: (key: string, value: string) => void
  removeItem: (key: string) => void
}

export const clampInt = (value: unknown) => {
  if (typeof value !== "number" || !Number.isFinite(value)) return 0
  return Math.max(0, Math.floor(value))
}

const safeJsonParse = (raw: string | null) => {
  if (!raw) return null
  try {
    return JSON.parse(raw) as unknown
  } catch {
    return null
  }
}

export const normalizeTallies = (planetIds: string[], raw: unknown): Tallies => {
  const base = Object.fromEntries(planetIds.map((id) => [id, 0])) as Tallies
  if (!raw || typeof raw !== "object") return base
  const record = raw as Record<string, unknown>
  for (const id of planetIds) {
    base[id] = clampInt(record[id])
  }
  return base
}

export const readTalliesFromStorage = (storage: StorageLike, planetIds: string[]) =>
  normalizeTallies(planetIds, safeJsonParse(storage.getItem(talliesKey)))

export const readSelectionFromStorage = (storage: StorageLike, planetIds: string[]) => {
  const existing = storage.getItem(selectionKey)
  if (!existing) return null
  return planetIds.includes(existing) ? existing : null
}

export const writeTalliesToStorage = (storage: StorageLike, tallies: Tallies) => {
  try {
    storage.setItem(talliesKey, JSON.stringify(tallies))
  } catch {}
}

export const writeSelectionToStorage = (storage: StorageLike, planetId: string | null) => {
  try {
    if (planetId === null) storage.removeItem(selectionKey)
    else storage.setItem(selectionKey, planetId)
  } catch {}
}

export const applyVote = ({
  planetIds,
  tallies,
  selection,
  planetId,
}: {
  planetIds: string[]
  tallies: Tallies
  selection: string | null
  planetId: string
}) => {
  if (!planetIds.includes(planetId)) return { tallies: normalizeTallies(planetIds, tallies), selection }

  const next = normalizeTallies(planetIds, tallies)
  if (selection === planetId) return { tallies: next, selection }

  if (selection && next[selection] > 0) next[selection] -= 1
  next[planetId] = (next[planetId] ?? 0) + 1

  return { tallies: next, selection: planetId }
}
