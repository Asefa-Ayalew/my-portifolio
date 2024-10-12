/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#33B0E60F",
          50: "#cef0fe",
          100: "#a2def6",
          200: "#72caef",
          300: "#4cbae9",
          400: "#31afe6",
          500: "#1baae5",
          600: "#0095cc",
          700: "#0085b8",
          800: "#0073a3",
          900: "#0c4a6e",
          DEFAULT: "#33B0E6",
        },
        danger: { 700: "#ff4d4f", DEFAULT: "#ff4d4f" },
      },
      container: {
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
