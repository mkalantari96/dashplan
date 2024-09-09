/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        estedad: ["ESTEDAD"],
      },
      colors: {
        primary: "#19337d",
        "primary-light": "#2042a0",
        secondary: "#fda521",
        white: "#fff",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        17: "repeat(17, minmax( auto,1fr))",
      },
    },
  },
  plugins: [],
};
