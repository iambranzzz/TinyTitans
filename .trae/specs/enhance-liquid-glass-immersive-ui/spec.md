# Tiny Titan Immersive Liquid-Glass UI Spec

## Why
The current Tiny Titan reveal site is functional, but the demo needs a more immersive, premium visual identity with a “liquid glass” aesthetic and a strict typography/color system inspired by the provided reference page.

## What Changes
- Apply a new global typography + color system (Anton + Condiment + monospace) and update Tailwind theme tokens accordingly.
- Add a reusable `.liquid-glass` effect and apply it consistently across navigation, buttons, cards, and overlays.
- Add a full-viewport texture overlay layer (`/texture.png`) using `mix-blend-mode: lighten` at `opacity: 0.6`.
- Restyle the existing Tiny Titan sections (Trailer, Planets, Weapons, Mounts, Creatures, Vote, Guide) to match the reference system while keeping all current functionality.
- Improve immersion using performance-safe, CSS-only motion (parallax-like offsets, hover sheen, scroll reveals), while honoring `prefers-reduced-motion`.
- Add the `ui-ux-pro-max` skill into the workspace and use its design-system output to validate the final styling decisions (while keeping the user-specified system as the source of truth).

## Impact
- Affected specs: global theming, typography system, shared UI primitives (nav, cards, modal/drawer), section layouts, accessibility and reduced motion.
- Affected code: `index.html`, Tailwind config, global CSS, shared components (`StickyNav`, `SectionShell`, `ModalDrawer`), section components.

## ADDED Requirements

### Requirement: ui-ux-pro-max Skill Availability
The system SHALL include the `ui-ux-pro-max` skill in the workspace under `.trae/skills/ui-ux-pro-max/` and make it usable to generate a design system for this project.

#### Scenario: Generate design system
- **WHEN** the user runs the recommended `ui-ux-pro-max` command for this project
- **THEN** the command outputs a design system (style, colors, typography, effects, anti-patterns)
- **AND** the output is used to cross-check implementation choices for this UI overhaul

### Requirement: Font System (Google Fonts)
The system SHALL load and use the following fonts:
- Anton: used for all headings and navigation text (aliased as `font-grotesk` in Tailwind).
- Condiment: used for accent/overlay text (aliased as `font-condiment` in Tailwind).
- System monospace: used for body/description paragraphs (`font-mono`).

#### Scenario: Font loading
- **WHEN** the page loads
- **THEN** headings and navigation render in Anton
- **AND** accent text renders in Condiment
- **AND** body/descriptions render in the system monospace font

### Requirement: Color System (Tailwind)
The system SHALL define and use the following color system:
- Background: `#010828`
- cream: `#EFF4FF`
- neon: `#6FFF00`

#### Scenario: Global colors
- **WHEN** the user views the site
- **THEN** the base page background is `#010828`
- **AND** default text uses `cream`
- **AND** accent underlines and accent script text use `neon`

### Requirement: Liquid Glass Effect
The system SHALL implement a `.liquid-glass` class matching the provided reference definition and apply it to:
- Primary navigation container
- Social icon buttons
- Cards and card overlays
- Modal/drawer surfaces where appropriate

#### Scenario: Glass styling
- **WHEN** a glass surface is displayed
- **THEN** it visually matches the liquid-glass style (translucent, blurred, inset highlight, gradient border mask)

### Requirement: Full-Screen Texture Overlay
The system SHALL render a fixed, full-screen texture overlay element:
- `pointer-events: none`
- High z-index above all content
- Background image `url(/texture.png)` with `background-size: cover`
- `mix-blend-mode: lighten` and `opacity: 0.6`

#### Scenario: Texture overlay presence
- **WHEN** the user scrolls through the page
- **THEN** the texture overlay remains fixed and consistent across sections

### Requirement: Reference-Style Navigation (Adapted)
The system SHALL restyle the existing section navigation using the reference’s rules:
- Anton, uppercase, compact tracking
- A centered liquid-glass nav capsule (hidden on mobile)
- A mobile menu that preserves the same typographic styling

#### Scenario: Desktop navigation
- **WHEN** the viewport is at least `lg`
- **THEN** a centered nav capsule is visible
- **AND** links transition to `neon` on hover

### Requirement: Immersive Motion (CSS-Only, Demo-Safe)
The system SHALL add immersion through CSS-only motion that remains smooth and demo-safe:
- Use `motion-safe:` variants for animations/transitions
- Provide static equivalents under `prefers-reduced-motion`
- Avoid heavy canvas/WebGL effects

#### Scenario: Demo safety
- **WHEN** the site is run on typical hackathon demo hardware
- **THEN** the experience remains smooth and responsive without relying on canvas/WebGL effects

#### Scenario: Reduced motion
- **WHEN** the user prefers reduced motion
- **THEN** non-essential animations (hover float, background drift, reveal transitions) are reduced/disabled

## MODIFIED Requirements

### Requirement: Existing Sections Keep Functionality
All existing features (planets/weapons/mounts/creatures details, vote persistence, Galactic Guide answers + sources, trailer playback/fullscreen) SHALL remain functional after the UI overhaul.

#### Scenario: Feature parity
- **WHEN** the user interacts with any existing feature
- **THEN** behavior matches the current site (no regressions)

## REMOVED Requirements
None.
