/**
 * https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
 * https://nextjs.org/docs/basic-features/font-optimization
 * https://beta.nextjs.org/docs/optimizing/fonts
 * https://fonts.google.com/specimen/Inter
 * https://nextjs.org/docs/messages/google-font-display
 * https://tailwindcss.com/docs/font-family
 * See also pages/_app.tsx
 */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // https://tailwindcss.com/docs/customizing-colors#generating-colors
        hollywood: {
          50: "#ffeaf7",
          100: "#ffd5ef",
          200: "#ffaadf",
          300: "#ff80cf",
          400: "#ff55bf",
          500: "#f400a1", // Base Hollywood cerise
          600: "#d6008e",
          700: "#b3007a",
          800: "#910066",
          900: "#6e0052",
          950: "#4b0037",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        jura: ["var(--font-jura)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
