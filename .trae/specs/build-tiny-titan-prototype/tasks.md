# Tasks
- [x] Task 1: Add Three.js and prototype scaffolding.
  - [x] Add `three` dependency (and types if needed) and confirm Vite build works.
  - [x] Create `src/game/` structure (engine loop, scene setup, asset loader, config).
  - [x] Add a “Play Prototype” launcher (button in a new section) and a full-screen overlay container.

- [x] Task 2: Implement third-person controller + camera.
  - [x] Implement input mapping (WASD, mouse orbit; pointer lock or click-drag fallback).
  - [x] Implement character kinematic movement (accel/friction, grounded plane, simple collider).
  - [x] Implement orbit camera that keeps character visible (Roblox-like feel).

- [x] Task 3: Build the arena environment.
  - [x] Create one stylized “planet slice” arena (ground, rocks/mushrooms/crystals as simple geometry).
  - [x] Add lighting + fog/atmosphere tuned for performance.
  - [x] Add optional lightweight particles (motion-safe).

- [x] Task 4: Implement Bubble Blaster combat.
  - [x] Implement projectile spawn, lifetime, and collision checks (sphere/box).
  - [x] Add hit feedback on enemy (flash/knockback-lite).

- [x] Task 5: Implement enemies and gameplay loop.
  - [x] Add 1–2 enemy types with basic steering and attack on proximity.
  - [x] Add player health, damage feedback, and respawn/reset.

- [x] Task 6: Add HUD + exit behavior.
  - [x] Add health bar + controls hint + exit button overlayed on the game.
  - [x] Ensure `Esc` exits the prototype cleanly and restores scrolling.
  - [x] Ensure the game disposes resources on exit (avoid memory leaks).

- [x] Task 7: Performance + accessibility pass.
  - [x] Add reduced-motion mode handling (disable shake/particles).
  - [x] Add lightweight quality caps (limit particle count, cap DPR if needed).
  - [x] Ensure stable frame pacing and no console errors.

- [x] Task 8: Verification.
  - [x] Add a smoke check that the prototype mounts/unmounts without throwing.
  - [x] Run `npm run build` and `npm run smoke`.
  - [x] Manual sanity: move, aim, shoot, damage enemy, exit, relaunch.

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 1
- Task 4 depends on Task 2
- Task 5 depends on Tasks 2 and 3 and 4
- Task 6 depends on Tasks 1–5
- Task 7 depends on Tasks 1–6
- Task 8 depends on Tasks 1–7
