/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "teams": 'minmax(0, 1fr) minmax(0, 200px) minmax(0, 1fr)'
      }
    },
  },
  plugins: [],
}