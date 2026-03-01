import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Brand Color (Orange)
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        navy: {
          950: "#020412", // Deeper, more "premium" black
          900: "#0A0D21",
          800: "#141A35",
          700: "#1E254A",
          400: "#636C9A",
        },
        champagne: {
          DEFAULT: "#EADDCA",
          50: "#fdf8f4",
          100: "#f9efdf",
          200: "#f1dec1",
          300: "#eaddca",
          400: "#d9c8aa",
          500: "#c4ae85",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-up": "slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        "slide-down": "slideDown 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 0% 0%, rgba(249, 115, 22, 0.15) 0, transparent 50%), radial-gradient(at 50% 0%, rgba(12, 74, 110, 0.15) 0, transparent 50%), radial-gradient(at 100% 0%, rgba(249, 115, 22, 0.15) 0, transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 25px rgba(249, 115, 22, 0.25)",
        "glow-lg": "0 0 50px rgba(249, 115, 22, 0.4)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        premium: "0 20px 50px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(255, 255, 255, 0.05)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
