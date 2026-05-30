# Tiny Titan Reveal Single-Page Website Spec

## Why
Tiny Titan needs a polished, judge-ready, interactive game reveal website that goes beyond simple video playback and demonstrates a complete marketing-style experience.

## What Changes
- Create a single-page reveal website (one route) with cinematic trailer hero, content sections, voting, and an AI-powered Galactic Guide.
- Add static JSON content sources for planets, weapons, creatures, mounts, and lore.
- Add a serverless chat endpoint that answers questions using lore JSON and supports OpenAI when configured, with a safe fallback when not.
- Implement localStorage-persisted community planet voting with live result display.
- Provide high-quality responsive UI (mobile → desktop) with modern marketing presentation (glass panels, glows, animated gradients, particles, smooth scrolling).

## Impact
- Affected specs: landing/hero, interactive content browsing, client-side persistence, AI Q&A, responsive UI/UX, deployment readiness.
- Affected code: React app shell, section components, JSON data under `src/data`, API route under `src/api`, Tailwind theme tokens, shared UI primitives (cards, modals/drawers, accordions).

## ADDED Requirements

### Requirement: Single-Page Reveal Experience
The system SHALL provide a single-page website that presents the Tiny Titan reveal in a guided flow: Trailer → Planets → Weapons → Mounts → Creatures → Vote → Galactic Guide.

#### Scenario: Navigate sections
- **WHEN** a user scrolls the page or uses the primary navigation (hero CTA and/or sticky nav)
- **THEN** the page scrolls smoothly to the target section and keeps the experience on the same route

### Requirement: Cinematic Trailer Hero
The system SHALL render a hero section with the title “Tiny Titan”, tagline “Small Explorer. Massive Adventure.”, and a “Watch Trailer” CTA that scrolls to or opens the trailer.

#### Scenario: Trailer playback
- **WHEN** the user clicks “Watch Trailer”
- **THEN** the trailer becomes the primary focus (inline hero player or modal/lightbox)
- **AND** fullscreen is available if the browser supports it

### Requirement: Planet Explorer
The system SHALL display interactive planet cards for Crystal Planet, Mushroom Planet, and Ember Planet.

#### Scenario: Planet detail
- **WHEN** the user clicks a planet card
- **THEN** a detail panel opens showing description, environment details, and native creatures for that planet

### Requirement: Gadget & Weapon Showcase
The system SHALL display weapon cards for Bubble Blaster, Gravity Hammer, Comet Cannon, and Disco Ray with hover/animated interactions.

#### Scenario: Weapon preview
- **WHEN** the user hovers or taps a weapon card (device-appropriate)
- **THEN** the card reveals secondary details and an emphasized visual state

### Requirement: Alien Mount Showcase
The system SHALL display mount cards for Rocket Snail, Plasma Beetle, Sky Whale, and Sand Worm with interactive presentation (cards + expanded detail).

#### Scenario: Mount detail
- **WHEN** the user selects a mount
- **THEN** the mount’s traversal fantasy and capabilities are shown in an expanded view

### Requirement: Creature Encyclopedia
The system SHALL display creature cards for: Chomper, Plasma Slime, Blink Hopper, Titan Crab, Glowtail, Orb Moth.

#### Scenario: Expand creature info
- **WHEN** the user expands a creature card
- **THEN** the UI shows a richer panel including role (hostile/passive), short behavior summary, and a flavor “field note”

### Requirement: Community Planet Vote (localStorage)
The system SHALL allow a user to vote for which planet they would explore first and persist that choice in localStorage.

#### Scenario: Vote persistence
- **WHEN** the user refreshes the page after voting
- **THEN** their vote remains selected
- **AND** the results display reflects their vote state

#### Scenario: Live results
- **WHEN** the user submits a vote
- **THEN** the results update immediately without a page reload

### Requirement: AI Galactic Guide (Lore-Sourced Q&A)
The system SHALL provide an “AI Galactic Guide” section where users can ask questions about the Tiny Titan universe.

#### Scenario: Answer with sources
- **WHEN** the user submits a question
- **THEN** the system returns an answer
- **AND** the system lists the lore sources used (IDs/titles/snippets) beneath the answer

#### Scenario: Fallback when AI unavailable
- **WHEN** the OpenAI API is not configured or a request fails
- **THEN** the system returns a helpful fallback response derived from local lore snippets
- **AND** the UI indicates that fallback mode is being used (without exposing secrets)

### Requirement: Data-Driven Content (Static JSON)
The system SHALL source planets, weapons, creatures, mounts, and lore from JSON files within the frontend codebase.

#### Scenario: Build-time integrity
- **WHEN** the site builds for production
- **THEN** missing or malformed JSON causes a clear build-time or runtime-visible error state (non-crashing UI where feasible)

### Requirement: Responsive & Accessible Presentation
The system SHALL be usable on mobile and desktop with accessible interactions.

#### Scenario: Keyboard navigation
- **WHEN** the user navigates with keyboard only
- **THEN** primary interactive controls (cards, buttons, inputs) are reachable and usable

#### Scenario: Reduced motion
- **WHEN** the user prefers reduced motion
- **THEN** non-essential animations are reduced/disabled while preserving usability

## MODIFIED Requirements
None.

## REMOVED Requirements
None.

