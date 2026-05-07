/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            navy: '#1C2A43',   // [cite: 27]
            orange: '#E87A5D', // [cite: 172]
            bg: '#F8F9FA'
          }
        }
      },
    },
    plugins: [],
  }