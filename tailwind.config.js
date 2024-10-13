/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ffee',
      'purple': '#7e5befee',
      'pink': '#ff49dbee',
      'orange': '#ff7849ee',
      'green': '#13ce66ee',
      'yellow': '#ffc82cee',
      'gray-dark': '#273444ee',
      'gray': '#8492a6ee',
      'gray-light': '#d3dce6ee',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
