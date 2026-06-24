import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem", screens: { "2xl": "1320px" } },
    extend: {
      colors: {
        navy: {
          950: "#060D17",
          900: "#0A1628",
          800: "#0F2138",
          700: "#16314F",
          600: "#1E4068",
        },
        gold: {
          400: "#E8C766",
          500: "#C9A227",
          600: "#A6841C",
        },
        ivory: "#F8F7F3",
        line: "rgba(201,162,39,0.18)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(201,162,39,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(201,162,39,0.06) 1px, transparent 1px)",
        "navy-radial":
          "radial-gradient(circle at 20% 0%, rgba(30,64,104,0.55) 0%, rgba(6,13,23,0) 55%)",
      },
      backgroundSize: { blueprint: "44px 44px" },
      keyframes: {
        draw: { from: { strokeDashoffset: "1" }, to: { strokeDashoffset: "0" } },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        draw: "draw 2.4s ease forwards",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem" },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
