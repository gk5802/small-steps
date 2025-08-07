import { type Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5", // Indigo
          2: "#10b981", // Emerald
          3: "#f97316", // Orange
          4: "#3b82f6", // Blue
          5: "#ec4899", // Pink
          6: "#8b5cf6", // Violet
          7: "#22c55e", // Green
          8: "#f59e0b", // Amber
          9: "#ef4444", // Red
          10: "#0ea5e9", // Sky
        },
      },
    },
  },
  plugins: [],
};
export default config;
