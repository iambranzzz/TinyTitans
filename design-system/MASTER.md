# Design System — UI/UX Pro Max

**Query**: game reveal landing page sci-fi neon liquid glass

## Tokens

### Colors

- `bg`: `#010828`
- `cream`: `#EFF4FF`
- `neon`: `#6FFF00`
- `accent_cyan`: `#00E5FF`
- `accent_magenta`: `#FF3AF2`
- `ink`: `#070B1C`
- `glass_fill`: `rgba(239, 244, 255, 0.10)`
- `glass_edge`: `rgba(239, 244, 255, 0.35)`
- `shadow`: `rgba(0, 0, 0, 0.45)`

### Typography

- `heading`: Anton
- `accent`: Condiment
- `body`: system-ui monospace
- `nav`: Anton uppercase 13px tracking-[0.22em]
- `h1`: Anton uppercase clamp(48px, 6vw, 92px)
- `h2`: Anton uppercase clamp(28px, 3.2vw, 44px)
- `p`: mono 14–16px leading-6 opacity-90

## Surfaces

- Use translucent fill + blur + subtle grain; keep borders masked/gradient-like.
- Keep contrast: cream text on bg; neon reserved for accents/underlines/active states.
- Prefer rounded 9999px for nav capsules; 20–28px for cards/modals.

### Liquid Glass Contract

- `backdrop_blur`: 12–18px
- `fill`: rgba(239, 244, 255, 0.10)
- `edge`: rgba(239, 244, 255, 0.35)
- `highlight`: inset 0 1px 0 rgba(255,255,255,0.25)

## Layout

- Max-width 1200–1280px, 24px gutters, section padding 80–120px (desktop) / 56–80px (mobile).
- H1 Anton uppercase; add Condiment accent overlay as a separate layer in neon.
- Primary CTA: liquid-glass pill with neon edge on hover.

## Components

### Nav Capsule

- Centered capsule on desktop (lg+), hidden on mobile.
- Neon underline bars for hover/active; keep hit targets ≥ 40px height.

### Icon Button

- Circular liquid-glass button with neon hover ring.
- Use transform/opacity-only motion; no layout-affecting transitions.

### Glass Card

- Card surface uses liquid-glass; overlay uses stronger blur + darker tint.
- Title in Anton; metadata in mono; accent script in Condiment as an overlay layer.

### Modal/Drawer

- Use liquid-glass surface with elevated shadow and clear close affordance.
- Ensure focus ring visibility against glass fills.

## Motion

- Use opacity/transform only (GPU-friendly).
- Respect prefers-reduced-motion by disabling reveals and hover floats.
- Hover float: translateY(-3px) over 180ms with ease-out.
- Sheen sweep: masked gradient moving across glass on hover (motion-safe only).
- Scroll reveal: small translateY(12px) + opacity 0→1 over 420ms.

## Accessibility + Anti-Patterns

### Guardrails

- Neon is accent-only; never use neon text for paragraphs.
- Maintain readable body contrast atop video by using a darkening scrim layer.
- Ensure focus states are visible on glass surfaces (2px ring in cream/neon).

### Avoid

- Avoid heavy glow filters on large text (causes blur and poor contrast).
- Avoid continuous background animation loops in demo builds.
- Avoid blur stacking (multiple backdrop-filter layers) in deep component trees.

