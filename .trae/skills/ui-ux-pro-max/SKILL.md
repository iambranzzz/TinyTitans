---
name: "ui-ux-pro-max"
description: "Generates deterministic UI/UX design-system guidance from a query. Invoke when you need page style decisions (colors, type, components, effects) or to persist a design-system markdown."
---

# UI/UX Pro Max

This skill generates a compact, deterministic design-system recommendation for a given UI/page concept. It is intended for fast iteration and cross-checking implementation decisions.

## Primary Command

Run from the project root:

```bash
python .trae/skills/ui-ux-pro-max/scripts/search.py --design-system "game reveal landing page sci-fi neon liquid glass"
```

## Persisting Output

Persist to the default project location (`design-system/MASTER.md`):

```bash
python .trae/skills/ui-ux-pro-max/scripts/search.py --design-system "..." --persist
```

Persist to a specific path:

```bash
python .trae/skills/ui-ux-pro-max/scripts/search.py --design-system "..." -p design-system/MASTER.md
```

## Optional Inputs

Target a specific page/section:

```bash
python .trae/skills/ui-ux-pro-max/scripts/search.py --design-system "..." --page "Landing/Hero"
```

Choose output format:

```bash
python .trae/skills/ui-ux-pro-max/scripts/search.py --design-system "..." -f md
python .trae/skills/ui-ux-pro-max/scripts/search.py --design-system "..." -f json
```

## Output Contract

The design-system output includes:
- Tokenized palette and typography
- Component surface rules for a liquid-glass aesthetic
- Motion rules that respect reduced-motion preferences
- Accessibility guardrails and anti-patterns
