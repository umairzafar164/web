/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["poppingsRegular"],
    },
    fontSize: {
      sm: "0.9rem",
      base: "1rem",
      xl: "1.1rem",
      "2xl": "1.2rem",
      "3xl": "1.3rem",
      "4xl": "1.4rem",
      "5xl": "1.5rem",
    },
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        green: {
          900: "#023D28",
          800: "#065035",
          700: "#0A744E",
          600: "#0D9F70",
          500: "#13B882",
          400: "#32D69A",
          300: "#6ADAB2",
          200: "#A4E8CF",
          100: "#C9F7E6",
          50: "#DCFFF3",
        },
      },
    },
  },
  plugins: [],
};
