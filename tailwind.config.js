/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stone-gray': '#4a4746',
        'purple1': '#a45aff',
        'purple2': '#bf8bff',
        'purple3': '#e5d0ff',
      }
    },
  },
  plugins: [],
}
