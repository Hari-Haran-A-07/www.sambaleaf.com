import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#151311",
          deep: "#151311",
          near: "#0B0A08",
          warm: "#191612",
        },
        cream: {
          DEFAULT: "#F5EBDD",
          light: "#FFF9F0",
          rice: "#FFF9F0",
          soft: "#F8F2E8",
        },
        leaf: {
          DEFAULT: "#304D35",
          deep: "#193524",
          olive: "#697052",
        },
        terracotta: {
          DEFAULT: "#A95332",
          burnt: "#9A5A35",
          warm: "#B85C38",
        },
        gold: {
          turmeric: "#C99A3A",
          soft: "#D6B56A",
          brass: "#C59B4B",
          copper: "#9A5A35",
        },
        brandText: {
          dark: "#211E1A",
          muted: "#756E64",
          lightMuted: "#A39C91",
        }
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "Playfair Display", "serif"],
        body: ["var(--font-inter)", "Inter", "Manrope", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        tamil: ["var(--font-tamil)", "Noto Sans Tamil", "Noto Serif Tamil", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        subtleZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        shimmer: "shimmer 3s infinite linear",
        subtleZoom: "subtleZoom 20s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
