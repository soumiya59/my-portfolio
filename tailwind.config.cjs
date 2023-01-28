/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almostblack : '#171717',
        greenishblue: '##00c6cf',
        warmblue:'#0098cb',
        warmpurple:'#7582ec'
      }
    },
  },
  plugins: [],
}
