var withAlpha = function (variable) { return "hsl(var(".concat(variable, ") / <alpha-value>)"); };
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bg: "#010828",
                cream: "#EFF4FF",
                neon: "#6FFF00",
                space: {
                    deep: withAlpha("--space-deep"),
                    blue: withAlpha("--space-blue"),
                    cosmic: withAlpha("--space-cosmic"),
                    neon: withAlpha("--space-neon"),
                    plasma: withAlpha("--space-plasma"),
                    energy: withAlpha("--space-energy"),
                },
                surface: withAlpha("--surface"),
                panel: withAlpha("--panel"),
                stroke: withAlpha("--stroke"),
                ink: {
                    950: "#070A12",
                    900: "#0B1020",
                    800: "#121A33",
                    700: "#1A2550",
                },
            },
            fontFamily: {
                grotesk: ["Anton", "ui-sans-serif", "system-ui", "sans-serif"],
                condiment: ["Condiment", "ui-serif", "Georgia", "serif"],
                mono: [
                    "ui-monospace",
                    "SFMono-Regular",
                    "Menlo",
                    "Monaco",
                    "Consolas",
                    "Liberation Mono",
                    "Courier New",
                    "monospace",
                ],
            },
            boxShadow: {
                glow: "0 0 0 1px rgba(255,255,255,0.06), 0 10px 40px rgba(0,0,0,0.5)",
                glowNeon: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 70px rgba(34,211,238,0.18), 0 35px 120px rgba(0,0,0,0.65)",
                glowEnergy: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 70px rgba(232,121,249,0.18), 0 35px 120px rgba(0,0,0,0.65)",
                glowPlasma: "0 0 0 1px rgba(255,255,255,0.06), 0 18px 70px rgba(251,146,60,0.18), 0 35px 120px rgba(0,0,0,0.65)",
            },
            backdropBlur: {
                xs: "2px",
            },
            backgroundImage: {
                aurora: "radial-gradient(1200px 700px at 18% 0%, hsl(var(--space-neon) / 0.18), transparent 60%), radial-gradient(980px 640px at 85% 14%, hsl(var(--space-energy) / 0.16), transparent 62%), radial-gradient(900px 560px at 55% 108%, hsl(var(--space-plasma) / 0.12), transparent 62%), radial-gradient(760px 560px at 48% 44%, hsl(var(--space-cosmic) / 0.12), transparent 64%)",
                particles: "radial-gradient(circle at 18% 20%, rgba(255,255,255,0.18) 0 1px, transparent 1.5px), radial-gradient(circle at 72% 32%, rgba(255,255,255,0.12) 0 1px, transparent 1.5px), radial-gradient(circle at 38% 72%, rgba(255,255,255,0.14) 0 1px, transparent 1.5px), radial-gradient(circle at 84% 78%, rgba(255,255,255,0.10) 0 1px, transparent 1.5px), radial-gradient(circle at 58% 18%, rgba(255,255,255,0.08) 0 1px, transparent 1.5px)",
            },
            keyframes: {
                auroraFloat: {
                    "0%": { transform: "translate3d(-2%, -2%, 0) scale(1)" },
                    "50%": { transform: "translate3d(3%, 1%, 0) scale(1.04)" },
                    "100%": { transform: "translate3d(-2%, -2%, 0) scale(1)" },
                },
                particleDrift: {
                    "0%": { transform: "translate3d(0, 0, 0)" },
                    "50%": { transform: "translate3d(-1.5%, 1.2%, 0)" },
                    "100%": { transform: "translate3d(0, 0, 0)" },
                },
                sectionIn: {
                    "0%": { opacity: "0", transform: "translate3d(0, 14px, 0)", filter: "blur(6px)" },
                    "100%": { opacity: "1", transform: "translate3d(0, 0, 0)", filter: "blur(0px)" },
                },
            },
            animation: {
                aurora: "auroraFloat 16s ease-in-out infinite",
                particles: "particleDrift 22s ease-in-out infinite",
                sectionIn: "sectionIn 700ms cubic-bezier(0.2, 0.8, 0.2, 1) both",
            },
            transitionProperty: {
                blur: "filter",
            },
        },
    },
    plugins: [],
};
