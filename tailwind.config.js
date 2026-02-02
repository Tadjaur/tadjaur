import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#6366f1",
            foreground: "#ffffff",
          },
          secondary: {
            DEFAULT: "#8b5cf6",
            foreground: "#ffffff",
          },
          background: "#0a0a0f",
          foreground: "#ffffff",
          content1: "#18181b",
          content2: "#27272a",
          content3: "#3f3f46",
          content4: "#52525b",
        },
      },
    },
  })],
};