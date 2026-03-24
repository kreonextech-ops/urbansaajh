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
        espresso: "#2C1810",
        "espresso-light": "#4A2E22",
        cream: "#F5EFE6",
        "cream-dark": "#EDE4D8",
        taupe: "#B8A99A",
        "taupe-dark": "#8C7B6E",
        gold: "#C9A96E",
        "gold-light": "#E2C99A",
        charcoal: "#3A3530",
        "warm-white": "#FAF7F4",
      },
      fontFamily: {
        cormorant: ["'Cormorant Garamond'", "Georgia", "serif"],
        italiana: ["'Italiana'", "Georgia", "serif"],
        dm: ["'DM Sans'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.3em",
        "mega-wide": "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
        "draw-line": "drawLine 1.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
