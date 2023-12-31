import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwinds').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      grayscale: {
        50: '50%',
        75: '75%',
      }
    },
  },
  plugins: [],
}