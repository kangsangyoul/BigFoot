import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "#E2E8F0",
        background: "#F8FAFC",
        card: "#FFFFFF",
        primary: {
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF"
        },
        muted: {
          DEFAULT: "#EEF2F7",
          foreground: "#64748B"
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        card: "0 12px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
