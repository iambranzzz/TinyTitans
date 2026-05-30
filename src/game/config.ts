export type PrototypeConfig = {
  clearColor: number
  dprCap: number
  fov: number
  cameraPosition: { x: number; y: number; z: number }
}

export const defaultPrototypeConfig: PrototypeConfig = {
  clearColor: 0x010828,
  dprCap: 2,
  fov: 56,
  cameraPosition: { x: 0, y: 1.9, z: 7.4 },
}

export const resolvePrototypeConfig = (partial?: Partial<PrototypeConfig>): PrototypeConfig => ({
  ...defaultPrototypeConfig,
  ...partial,
  cameraPosition: {
    ...defaultPrototypeConfig.cameraPosition,
    ...(partial?.cameraPosition ?? {}),
  },
})
