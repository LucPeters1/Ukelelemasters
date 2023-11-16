/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#001233',
        'coral-red': '#FF595A',
        'beige': '#CAC0B3',
      }
    },
  },
  plugins: [],
}
