/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'], // Add Josefin Sans font
      },
    },
  },
  plugins: [],
}