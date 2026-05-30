# Tiny Titan Playable Prototype Spec

## Why
The reveal site needs a lightweight, demo-smooth playable slice that proves the Tiny Titan gameplay fantasy (third-person exploration + fast, cute combat) directly in the browser.

## What Changes
- Add a “Play Prototype” entry point inside the existing reveal website (no separate app), opening a full-screen playable mode and returning back to the site.
- Add a minimal third-person 3D prototype using Three.js (rendering, camera, input, simple physics/collisions).
- Implement a small “arena planet” test space with stylized lighting and atmospheric particles (performance-safe).
- Add a playable character controller (WASD + mouse orbit camera) inspired by Roblox camera freedom.
- Add Bubble Blaster combat (projectiles, hit detection, simple enemy AI, health/respawn loop).
- Add a compact in-game HUD (health, ammo/heat, controls hint, exit button).
- Ensure the prototype is smooth for demo (stable frame pacing, capped effects, quality fallbacks).

## Impact
- Affected specs: site navigation/overlay system, runtime performance budgets, input handling, accessible escape hatches.
- Affected code: new `src/game/*` runtime, `App.tsx` entry point, Tailwind/global styles for full-screen overlay, build tooling for Three.js.

## ADDED Requirements

### Requirement: Prototype Entry Point (In Current Website)
The system SHALL provide a “Play Prototype” entry point within the existing website that launches the playable demo.

#### Scenario: Launch and exit
- **WHEN** the user clicks “Play Prototype”
- **THEN** a full-screen overlay opens and the game initializes
- **AND** the user can exit back to the website via an on-screen button and the `Esc` key

### Requirement: Third-Person Character Controller
The system SHALL provide a third-person character controller suitable for fast movement in a small arena.

#### Scenario: Basic movement
- **WHEN** the user presses WASD
- **THEN** the character moves relative to camera orientation with acceleration and friction (no instant stop)

#### Scenario: Camera orbit (Roblox-like)
- **WHEN** the user moves the mouse (pointer locked or click-drag, as supported)
- **THEN** the camera orbits the character smoothly while keeping the character visible

### Requirement: Bubble Blaster Combat
The system SHALL provide a Bubble Blaster weapon usable in the prototype.

#### Scenario: Shoot
- **WHEN** the user clicks or holds the primary fire input
- **THEN** bubble projectiles spawn from the character forward direction
- **AND** projectiles travel, collide, and despawn on impact or after a short lifetime

#### Scenario: Hit enemy
- **WHEN** a projectile hits an enemy
- **THEN** the enemy takes damage and gives visual feedback (flash/knockback-lite)
- **AND** the HUD updates any relevant counters (optional)

### Requirement: Enemies (Cute + Hostile)
The system SHALL spawn at least 1–2 enemy archetypes inspired by the trailer reference (cute creatures with readable silhouettes).

#### Scenario: Enemy pursuit
- **WHEN** the player enters detection range
- **THEN** enemies pursue or circle the player with simple steering (no heavy pathfinding)

#### Scenario: Player damage
- **WHEN** an enemy reaches melee range or lands an attack
- **THEN** the player loses health and receives feedback (screen vignette / brief shake, motion-safe)

### Requirement: HUD and Controls
The system SHALL display a minimal HUD:
- Health bar
- Controls hint (WASD + Mouse + Shoot + Exit)
- Exit button

#### Scenario: Accessibility escape hatch
- **WHEN** the user cannot or does not want to play
- **THEN** the Exit button always works and restores the site state

### Requirement: Performance and Demo Smoothness
The system SHALL remain smooth on typical hackathon demo hardware.

#### Scenario: Frame pacing
- **WHEN** the prototype is running
- **THEN** animations and camera updates use `requestAnimationFrame`
- **AND** expensive effects are limited (no heavy physics, no large post-processing stack)

#### Scenario: Quality fallback
- **WHEN** the device is low-power or the user prefers reduced motion
- **THEN** non-essential effects (particles, camera shake, heavy glows) are reduced/disabled

## MODIFIED Requirements

### Requirement: Website Features Remain Stable
The existing reveal site (trailer, sections, voting, Galactic Guide, liquid-glass styling) SHALL remain functional and visually stable after adding the prototype entry point.

## REMOVED Requirements
None.

