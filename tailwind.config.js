/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily:{
      'sans': ['Roboto','sans-serif']
    },
    extend: {},
    backgroundImage:{
      "home":"URL('/assets/bg.png')"
    }
  },
  plugins: [],
}

