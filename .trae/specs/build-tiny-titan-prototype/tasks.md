# Tasks
- [x] Task 1: Add Three.js and prototype scaffolding.
  - [x] Add `three` dependency (and types if needed) and confirm Vite build works.
  - [x] Create `src/game/` structure (engine loop, scene setup, asset loader, config).
  - [x] Add a “Play Prototype” launcher (button in a new section) and a full-screen overlay container.

- [ ] Task 2: Implement third-person controller + camera.
  - [ ] Implement input mapping (WASD, mouse orbit; pointer lock or click-drag fallback).
  - [ ] Implement character kinematic movement (accel/friction, grounded plane, simple collider).
  - [ ] Implement orbit camera that keeps character visible (Roblox-like feel).

- [ ] Task 3: Build the arena environment.
  - [ ] Create one stylized “planet slice” arena (ground, rocks/mushrooms/crystals as simple geometry).
  - [ ] Add lighting + fog/atmosphere tuned for performance.
  - [ ] Add optional lightweight particles (motion-safe).

- [ ] Task 4: Implement Bubble Blaster combat.
  - [ ] Implement projectile spawn, lifetime, and collision checks (sphere/box).
  - [ ] Add hit feedback on enemy (flash/knockback-lite).

- [ ] Task 5: Implement enemies and gameplay loop.
  - [ ] Add 1–2 enemy types with basic steering and attack on proximity.
  - [ ] Add player health, damage feedback, and respawn/reset.

- [ ] Task 6: Add HUD + exit behavior.
  - [ ] Add health bar + controls hint + exit button overlayed on the game.
  - [ ] Ensure `Esc` exits the prototype cleanly and restores scrolling.
  - [ ] Ensure the game disposes resources on exit (avoid memory leaks).

- [ ] Task 7: Performance + accessibility pass.
  - [ ] Add reduced-motion mode handling (disable shake/particles).
  - [ ] Add lightweight quality caps (limit particle count, cap DPR if needed).
  - [ ] Ensure stable frame pacing and no console errors.

- [ ] Task 8: Verification.
  - [ ] Add a smoke check that the prototype mounts/unmounts without throwing.
  - [ ] Run `npm run build` and `npm run smoke`.
  - [ ] Manual sanity: move, aim, shoot, damage enemy, exit, relaunch.

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 1
- Task 4 depends on Task 2
- Task 5 depends on Tasks 2 and 3 and 4
- Task 6 depends on Tasks 1–5
- Task 7 depends on Tasks 1–6
- Task 8 depends on Tasks 1–7
