/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        beige: "#e2d5c3",
        cstmblack: "#000807",
        cstmpurple: "#4b2850",
      }
    },
  },
  plugins: [],
};
