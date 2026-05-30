import argparse
import json
import os
from pathlib import Path


def _repo_root() -> Path:
    return Path(__file__).resolve().parents[4]


def _normalize_query(query_parts: list[str]) -> str:
    q = " ".join(p.strip() for p in query_parts if p.strip()).strip()
    return q


def _keyword_flags(q: str) -> dict[str, bool]:
    ql = q.lower()
    keys = [
        "game",
        "reveal",
        "landing",
        "sci-fi",
        "scifi",
        "neon",
        "liquid",
        "glass",
        "space",
        "cyber",
        "retro",
        "minimal",
    ]
    return {k: (k in ql) for k in keys}


def _recommendations(q: str, page: str | None) -> dict:
    flags = _keyword_flags(q)

    palette = {
        "bg": "#010828",
        "cream": "#EFF4FF",
        "neon": "#6FFF00",
        "ink": "#070B1C",
        "glass_edge": "rgba(239, 244, 255, 0.35)",
        "glass_fill": "rgba(239, 244, 255, 0.10)",
        "shadow": "rgba(0, 0, 0, 0.45)",
        "accent_cyan": "#00E5FF" if (flags["sci-fi"] or flags["scifi"] or flags["cyber"]) else "#3AA0FF",
        "accent_magenta": "#FF3AF2" if (flags["neon"] or flags["cyber"]) else "#B54CFF",
    }

    typography = {
        "heading": "Anton",
        "accent": "Condiment",
        "body": "system-ui monospace",
        "nav": "Anton uppercase 13px tracking-[0.22em]",
        "h1": "Anton uppercase clamp(48px, 6vw, 92px)",
        "h2": "Anton uppercase clamp(28px, 3.2vw, 44px)",
        "p": "mono 14–16px leading-6 opacity-90",
    }

    surfaces = {
        "liquid_glass_rules": [
            "Use translucent fill + blur + subtle grain; keep borders masked/gradient-like.",
            "Keep contrast: cream text on bg; neon reserved for accents/underlines/active states.",
            "Prefer rounded 9999px for nav capsules; 20–28px for cards/modals.",
        ],
        "liquid_glass_css_contract": {
            "backdrop_blur": "12–18px",
            "fill": palette["glass_fill"],
            "edge": palette["glass_edge"],
            "highlight": "inset 0 1px 0 rgba(255,255,255,0.25)",
        },
    }

    components = [
        {
            "name": "Nav Capsule",
            "rules": [
                "Centered capsule on desktop (lg+), hidden on mobile.",
                "Neon underline bars for hover/active; keep hit targets ≥ 40px height.",
            ],
        },
        {
            "name": "Icon Button",
            "rules": [
                "Circular liquid-glass button with neon hover ring.",
                "Use transform/opacity-only motion; no layout-affecting transitions.",
            ],
        },
        {
            "name": "Glass Card",
            "rules": [
                "Card surface uses liquid-glass; overlay uses stronger blur + darker tint.",
                "Title in Anton; metadata in mono; accent script in Condiment as an overlay layer.",
            ],
        },
        {
            "name": "Modal/Drawer",
            "rules": [
                "Use liquid-glass surface with elevated shadow and clear close affordance.",
                "Ensure focus ring visibility against glass fills.",
            ],
        },
    ]

    motion = {
        "principles": [
            "Use opacity/transform only (GPU-friendly).",
            "Respect prefers-reduced-motion by disabling reveals and hover floats.",
        ],
        "suggestions": [
            "Hover float: translateY(-3px) over 180ms with ease-out.",
            "Sheen sweep: masked gradient moving across glass on hover (motion-safe only).",
            "Scroll reveal: small translateY(12px) + opacity 0→1 over 420ms.",
        ],
    }

    accessibility = {
        "guardrails": [
            "Neon is accent-only; never use neon text for paragraphs.",
            "Maintain readable body contrast atop video by using a darkening scrim layer.",
            "Ensure focus states are visible on glass surfaces (2px ring in cream/neon).",
        ],
        "anti_patterns": [
            "Avoid heavy glow filters on large text (causes blur and poor contrast).",
            "Avoid continuous background animation loops in demo builds.",
            "Avoid blur stacking (multiple backdrop-filter layers) in deep component trees.",
        ],
    }

    layout = {
        "grid": "Max-width 1200–1280px, 24px gutters, section padding 80–120px (desktop) / 56–80px (mobile).",
        "hero": [
            "H1 Anton uppercase; add Condiment accent overlay as a separate layer in neon.",
            "Primary CTA: liquid-glass pill with neon edge on hover.",
        ],
    }

    out = {
        "query": q,
        "page": page or "",
        "tokens": {"colors": palette, "typography": typography},
        "surfaces": surfaces,
        "layout": layout,
        "components": components,
        "motion": motion,
        "accessibility": accessibility,
    }

    if page:
        out["page_notes"] = [
            f"Page focus: {page}",
            "Use the same tokens; vary only density (spacing) and content hierarchy per section.",
        ]

    return out


def _to_markdown(data: dict) -> str:
    colors = data["tokens"]["colors"]
    type_ = data["tokens"]["typography"]
    page = data.get("page", "").strip()

    lines: list[str] = []
    lines.append("# Design System — UI/UX Pro Max")
    lines.append("")
    lines.append(f"**Query**: {data['query']}")
    if page:
        lines.append(f"**Page**: {page}")
    lines.append("")
    lines.append("## Tokens")
    lines.append("")
    lines.append("### Colors")
    lines.append("")
    for k in ["bg", "cream", "neon", "accent_cyan", "accent_magenta", "ink", "glass_fill", "glass_edge", "shadow"]:
        lines.append(f"- `{k}`: `{colors[k]}`")
    lines.append("")
    lines.append("### Typography")
    lines.append("")
    for k in ["heading", "accent", "body", "nav", "h1", "h2", "p"]:
        lines.append(f"- `{k}`: {type_[k]}")
    lines.append("")
    lines.append("## Surfaces")
    lines.append("")
    for r in data["surfaces"]["liquid_glass_rules"]:
        lines.append(f"- {r}")
    lines.append("")
    lines.append("### Liquid Glass Contract")
    lines.append("")
    for k, v in data["surfaces"]["liquid_glass_css_contract"].items():
        lines.append(f"- `{k}`: {v}")
    lines.append("")
    lines.append("## Layout")
    lines.append("")
    lines.append(f"- {data['layout']['grid']}")
    for r in data["layout"]["hero"]:
        lines.append(f"- {r}")
    lines.append("")
    lines.append("## Components")
    lines.append("")
    for c in data["components"]:
        lines.append(f"### {c['name']}")
        lines.append("")
        for r in c["rules"]:
            lines.append(f"- {r}")
        lines.append("")
    lines.append("## Motion")
    lines.append("")
    for r in data["motion"]["principles"]:
        lines.append(f"- {r}")
    for r in data["motion"]["suggestions"]:
        lines.append(f"- {r}")
    lines.append("")
    lines.append("## Accessibility + Anti-Patterns")
    lines.append("")
    lines.append("### Guardrails")
    lines.append("")
    for r in data["accessibility"]["guardrails"]:
        lines.append(f"- {r}")
    lines.append("")
    lines.append("### Avoid")
    lines.append("")
    for r in data["accessibility"]["anti_patterns"]:
        lines.append(f"- {r}")
    lines.append("")
    if data.get("page_notes"):
        lines.append("## Page Notes")
        lines.append("")
        for r in data["page_notes"]:
            lines.append(f"- {r}")
        lines.append("")

    return "\n".join(lines)


def _resolve_persist_path(root: Path, persist_value: str, fmt: str) -> Path:
    p = Path(persist_value)
    if not p.is_absolute():
        p = root / p

    if str(p).endswith(("\\", "/")) or p.suffix == "":
        p = p / ("MASTER.json" if fmt == "json" else "MASTER.md")

    return p


def main() -> int:
    parser = argparse.ArgumentParser(prog="ui-ux-pro-max")
    parser.add_argument("--design-system", action="store_true")
    parser.add_argument("--persist", "-p", nargs="?", const="design-system/MASTER.md")
    parser.add_argument("--page", default="")
    parser.add_argument("-f", "--format", choices=["md", "json"], default="md")
    parser.add_argument("query", nargs="*")

    args = parser.parse_args()

    q = _normalize_query(args.query)
    if args.design_system:
        if not q:
            raise SystemExit("Missing query. Example: --design-system \"game reveal landing page ...\"")

        data = _recommendations(q, args.page.strip() or None)
        if args.format == "json":
            rendered = json.dumps(data, indent=2, sort_keys=True)
        else:
            rendered = _to_markdown(data)

        if args.persist is not None:
            root = _repo_root()
            out_path = _resolve_persist_path(root, str(args.persist), args.format)
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(rendered + os.linesep, encoding="utf-8")
            print(str(out_path))
            return 0

        print(rendered)
        return 0

    raise SystemExit("No action specified. Use --design-system.")


if __name__ == "__main__":
    raise SystemExit(main())
