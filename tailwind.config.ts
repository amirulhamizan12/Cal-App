import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: {
          DEFAULT: '#191919', // Main background
          '50': '#2d2d2d',   // Lighter surface
          '100': '#262626',  // Surface
          '200': '#232323',  // Subtle surface
          '300': '#1f1f1f',  // Background
          '400': '#1a1a1a',  // Deep background
        }
      },
    },
  },
  plugins: [],
};
export default config;
