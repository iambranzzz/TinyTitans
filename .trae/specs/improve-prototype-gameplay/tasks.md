# Tasks
- [x] Task 1: Add 3D model loading pipeline (GLB/GLTF).
  - [x] Add a loader that can load `public/models/*.glb` (Three.js GLTFLoader).
  - [x] Define expected model names and scaling conventions (e.g. `player.glb`, `enemy-chaser.glb`, `enemy-skirter.glb`).
  - [x] Implement graceful fallback to procedural meshes when models are missing.

- [x] Task 2: Replace prototype characters with model-backed renderables.
  - [x] Player uses `player.glb` when available, otherwise procedural astronaut.
  - [x] Enemies use their GLB models when available, otherwise procedural creatures.
  - [x] Ensure hit feedback still works (flash/outline-lite) for both model and fallback meshes.

- [x] Task 3: Fix inverted / confusing controls.
  - [x] Validate camera yaw/pitch updates from mouse delta are non-inverted by default.
  - [x] Validate movement mapping (WASD relative to camera yaw) and remove any sign inversion.
  - [x] Update HUD controls text if needed to match behavior.

- [x] Task 4: Lower difficulty defaults.
  - [x] Reduce enemy count, speed, acceleration, attack cooldown, and damage in config defaults.
  - [x] Ensure the player does not die too quickly from spawn pressure.

- [x] Task 5: Improve direction readability and aiming clarity.
  - [x] Ensure the player’s “front” is visually obvious (character facing + ground arrow/compass).
  - [x] Add/keep a center crosshair that is readable and fits the HUD style.

- [x] Task 6: Verification.
  - [x] Ensure the prototype runs with and without models present in `public/models/`.
  - [x] Run `npm run build` and `npm run smoke`.
  - [x] Manual sanity: movement feels correct, enemies are slower, crosshair present, and combat feels fair.

# Task Dependencies
- Task 2 depends on Task 1
- Task 5 depends on Tasks 2–4
- Task 6 depends on Tasks 1–5
