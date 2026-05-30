# Tiny Titan Prototype Gameplay Improvements Spec

## Why
The current prototype feels too abstract (simple shapes), controls feel inverted/confusing, and combat difficulty is too punishing. The demo needs a clearer, more “game-like” third-person experience with readable character direction, smoother controls, and easier enemies.

## What Changes
- Replace placeholder geometry-only characters with proper 3D character rendering support (GLB/GLTF) with graceful fallback to procedural meshes when models are missing.
- Fix camera + movement controls so they are intuitive (no inversion, consistent “W = forward” relative to camera).
- Reduce combat difficulty by tuning enemy speed, acceleration, attack cadence, and damage; reduce initial enemy count.
- Improve player orientation readability (clear forward indicator and/or compass).
- Add/keep an always-visible crosshair for shooting alignment.

## Impact
- Affected specs: prototype rendering pipeline, input mapping, combat tuning, HUD/UX clarity.
- Affected code: `src/game/input.ts`, `src/game/scene.ts`, `src/game/config.ts`, `src/game/loader.ts`, `src/game/PrototypeOverlay.tsx`, plus new `src/game/models/*` helpers.

## ADDED Requirements

### Requirement: Proper 3D Character Support
The system SHALL support loading and rendering proper 3D character models for:
- Player character
- At least one enemy archetype

#### Scenario: Models available
- **WHEN** the project contains GLB/GLTF model files in `public/models/`
- **THEN** the prototype loads and displays them at runtime
- **AND** the models are lit consistently with the arena lighting

#### Scenario: Models missing
- **WHEN** model files are missing or fail to load
- **THEN** the prototype falls back to the existing procedural meshes
- **AND** the prototype remains playable (no crash)

### Requirement: Non-Inverted Controls
The system SHALL provide intuitive controls:
- Movement uses WASD relative to camera orientation
- Mouse look/orbit uses a non-inverted mapping by default

#### Scenario: Move forward
- **WHEN** the user presses W
- **THEN** the character moves forward relative to the current camera yaw

#### Scenario: Look direction
- **WHEN** the user moves the mouse right
- **THEN** the camera yaw rotates right around the player (intuitive orbit)

### Requirement: Lower Difficulty Default
The system SHALL make the default prototype difficulty easier for demos.

#### Scenario: Enemy pressure
- **WHEN** the prototype starts
- **THEN** fewer enemies spawn than before
- **AND** enemies move slower and attack less frequently
- **AND** player time-to-death is meaningfully increased

### Requirement: Clear Direction Readability
The system SHALL make it obvious where “forward” is for the player.

#### Scenario: Direction cue
- **WHEN** the player is moving or aiming
- **THEN** a clear forward indicator is visible (character facing cue and/or ground arrow/compass)

### Requirement: Crosshair for Shooting
The system SHALL show a center crosshair during gameplay for shooting alignment.

#### Scenario: Aiming aid
- **WHEN** the prototype overlay is open
- **THEN** the crosshair is visible and does not block HUD readability

## MODIFIED Requirements

### Requirement: Prototype Remains Demo-Smooth
The prototype SHALL remain smooth on typical demo hardware even after adding model loading.

#### Scenario: Performance budget
- **WHEN** models are loaded
- **THEN** they are optimized for real-time rendering (reasonable triangle count/material usage)
- **AND** the game maintains stable frame pacing

## REMOVED Requirements
None.

