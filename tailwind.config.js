/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class', // enable dark mode toggle
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        secondary: '#facc15',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}