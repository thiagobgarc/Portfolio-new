/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1a202c',
        neonBlue: {
          DEFAULT: '#00f',
          light: '#00f',
          dark: '#00f',
        },
      },
    },
  },
  plugins: [],
}

