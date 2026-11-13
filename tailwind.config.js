/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f6f7f5',
          100: '#e3e6df',
          200: '#c7cdc0',
          300: '#a4ad99',
          400: '#838f76',
          500: '#68745b',
          600: '#515b47',
          700: '#41493a',
          800: '#363c31',
          900: '#2f342b',
        },
        accent: '#b08d57',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
}
