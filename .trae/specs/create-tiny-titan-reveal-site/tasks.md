# Tasks
- [x] Task 1: Establish single-page structure and navigation.
  - [x] Add/confirm one-route layout with section anchors and smooth scrolling.
  - [x] Create shared layout primitives (section shell, sticky nav, modal/drawer for details).

- [x] Task 2: Implement Cinematic Trailer Hero.
  - [x] Build hero with title/tagline/CTA and embedded PixVerse trailer container.
  - [x] Add fullscreen support and mobile-friendly playback layout.

- [x] Task 3: Add data model and JSON content files.
  - [x] Create `src/data/planets.json`, `weapons.json`, `creatures.json`, `mounts.json`, `lore.json` aligned to the PRD.
  - [x] Add TypeScript types + lightweight runtime validation/error UI for missing data.

- [x] Task 4: Build Planet Explorer section (cards + details).
  - [x] Planet cards for three planets with click-to-open detail view.
  - [x] Detail view shows description, environment details, and native creatures.

- [x] Task 5: Build Weapons section (animated cards).
  - [x] Weapon cards with hover/tap states and description reveal.

- [x] Task 6: Build Mounts section (interactive showcase).
  - [x] Mount cards with expanded view for traversal capabilities and fantasy.

- [x] Task 7: Build Creature Encyclopedia (expandable cards).
  - [x] Creature list with expandable info panel and “field note” flavor text.

- [x] Task 8: Build Community Planet Vote (localStorage + live results).
  - [x] Vote UI for three planets with persistent selection in localStorage.
  - [x] Live results display and clear “already voted” state.

- [x] Task 9: Build AI Galactic Guide (UI + API + fallback).
  - [x] UI chat panel with question input, answer, and sources list.
  - [x] Add serverless `src/api/chat.ts` that uses lore JSON retrieval and calls OpenAI when configured.
  - [x] Implement safe fallback answer generation from lore snippets on errors/missing key.

- [x] Task 10: Visual design polish and responsiveness.
  - [x] Tailwind theme tokens for “Deep Space Blue / Cosmic Purple / Neon Cyan / Plasma Orange / Energy Pink”.
  - [x] Glass panels, glow accents, subtle particles/animated gradients, and section transitions.
  - [x] Ensure mobile layout, contrast, and focus states.
  - [x] Add reduced-motion handling.

- [x] Task 11: Verification.
  - [x] Add basic tests or smoke checks (component render + vote persistence + guide fallback).
  - [x] Build/run locally and ensure no console errors on primary flows.

# Task Dependencies
- Task 4 depends on Task 3
- Task 5 depends on Task 3
- Task 6 depends on Task 3
- Task 7 depends on Task 3
- Task 8 depends on Task 1
- Task 9 depends on Task 3
- Task 10 depends on Tasks 1–9
- Task 11 depends on Tasks 1–10
