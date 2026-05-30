# Tasks
- [x] Task 0: Add and use the `ui-ux-pro-max` skill for this redesign.
  - [x] Add `.trae/skills/ui-ux-pro-max/SKILL.md` using the user-provided skill content.
  - [x] Ensure `.trae/skills/ui-ux-pro-max/scripts/search.py` exists and runs on Windows with the documented CLI (provide a minimal implementation if missing).
  - [x] Run the `--design-system` query for “game reveal landing page sci-fi neon liquid glass” and persist results for this project.

- [x] Task 1: Add font + theme foundations.
  - [x] Load Google Fonts (Anton + Condiment) in `index.html`.
  - [x] Add Tailwind font aliases: `font-grotesk` (Anton) and `font-condiment` (Condiment).
  - [x] Add Tailwind colors: `bg` (#010828), `cream` (#EFF4FF), `neon` (#6FFF00), and migrate usage to these tokens.

- [x] Task 2: Implement and apply `.liquid-glass` effect.
  - [x] Add the exact `.liquid-glass` CSS (and `::before`) to global styles.
  - [x] Apply `.liquid-glass` to: nav capsule, icon buttons, cards, card overlays, and selected modal/drawer surfaces.

- [x] Task 3: Add texture overlay layer.
  - [x] Add `/texture.png` asset and a fixed overlay element at the app root (z-50, pointer-events-none, mix-blend-mode: lighten, opacity 0.6).
  - [x] Ensure the overlay does not break readability/contrast; tune opacity only if required for accessibility.

- [x] Task 4: Restyle navigation to match the reference system.
  - [x] Desktop: centered capsule nav (Anton 13px uppercase) hidden below `lg`.
  - [x] Mobile: keep existing drawer menu but match the typography and neon hover states.
  - [x] Add neon underline bars / active-state styling consistent with the reference.

- [x] Task 5: Restyle hero + section typography.
  - [x] Apply Anton uppercase headings and monospace body text across sections.
  - [x] Add Condiment accent overlays (neon, mix-blend-exclusion where safe) to key headings (Hero/Planets/Armory/Mounts/Creatures/Guide).
  - [x] Keep the existing PixVerse trailer flow (hero CTA + lightbox) and ensure readability atop media.

- [x] Task 6: Immersive motion polish (CSS-only, demo-safe).
  - [x] Add motion-safe hover “float”/sheen to cards and icon buttons.
  - [x] Add scroll reveal transitions that respect `prefers-reduced-motion`.
  - [x] Ensure GPU-friendly properties (opacity/transform) and avoid layout thrash.

- [x] Task 7: Optional icon system alignment.
  - [x] Add `lucide-react` (Mail/Twitter/Github) OR replace with equivalent inline SVG icons matching the reference sizing and stroke.
  - [x] Use icons in the hero social buttons and any persistent social group.

- [x] Task 8: Verification.
  - [x] Run existing smoke checks and production build.
  - [x] Confirm no regressions in: vote persistence, guide fallback + sources, modal/drawer interactions, and trailer fullscreen.
  - [x] Validate `prefers-reduced-motion` behavior.

# Task Dependencies
- Task 1 depends on Task 0
- Task 2 depends on Task 1
- Task 4 depends on Task 1 and Task 2
- Task 5 depends on Task 1 and Task 2
- Task 6 depends on Task 2 and Task 5
- Task 8 depends on Tasks 1–7
