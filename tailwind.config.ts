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
        espresso: "#1B3629",        // Dark Forest Green
        "espresso-light": "#274D3A",// Lighter Forest Green
        cream: "#F5F0E6",           // Light Beige
        "cream-dark": "#E3D5C1",    // Darker Beige
        taupe: "#9FA69D",           // Muted Sage/Grey
        "taupe-dark": "#4A5D51",    // Medium Forest Green
        gold: "#C2B28F",            // Warm Beige Accent
        "gold-light": "#D4C7A7",    // Lighter Beige Accent
        charcoal: "#0D1F16",        // Very Dark Forest Green
        "warm-white": "#FCFBF8",    // Off-white / Lightest Beige
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
