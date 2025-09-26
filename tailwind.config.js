/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0F172A', // deep navy/black for luxe look
          accent: '#F59E0B'   // gold/yellow accent
        }
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.jpg')"
      }
    },
  },
  plugins: [],
}
