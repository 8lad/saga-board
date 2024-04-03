/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    gridTemplateColumns: {
      "big-screen": "repeat(4, minmax(64px, 12rem))",
    },
    extend: {
      colors: {
        "main-bg": "#282C34",
      },
      screens: {
        "short": { "raw": "(max-height: 800px)" }
      }
    },
  },
  plugins: [],
};
