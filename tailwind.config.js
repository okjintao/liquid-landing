/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "liquid-glow": "var(--color-liquid-glow)",
        "deep-ocean": "var(--color-deep-ocean)",
        "dark-teal": "var(--color-dark-teal)",
        "slate-blue": "var(--color-slate-blue)",
        "soft-cyan": "var(--color-soft-cyan)",
        "off-white": "var(--color-off-white)",
        "muted-blue": "var(--color-muted-blue)",
        "smoke-black": "var(--color-smoke-black)",
      },
      spacing: {
        52: "13rem",
        64: "16rem",
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        oscillate: "oscillate 10s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.3s ease-out forwards",
        "gradient-x": "gradientX 15s ease infinite",
        "wave-slow": "waveSlow 12s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s infinite ease-in-out",
        shimmer: "shimmer 3s infinite",
      },
      keyframes: {
        oscillate: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(4deg)" },
          "75%": { transform: "rotate(-4deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        waveSlow: {
          "0%, 100%": { transform: "scaleX(1)" },
          "50%": { transform: "scaleX(0.95)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 12px 2px var(--color-liquid-glow)",
          },
          "50%": {
            boxShadow: "0 0 20px 4px var(--color-liquid-glow)",
          },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      letterSpacing: {
        tight: "-0.025em",
      },
      lineHeight: {
        relaxed: "1.75",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      boxShadow: {
        glow: "0 0 12px 2px var(--color-liquid-glow)",
        "glow-lg": "0 0 20px 4px var(--color-liquid-glow)",
      },
    },
  },
  plugins: [],
};
