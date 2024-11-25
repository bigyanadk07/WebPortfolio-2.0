/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'draw': 'draw 3s ease-in-out infinite',
      },
      keyframes: {
        draw: {
          '0%': { strokeDasharray: '0, 200' },
          '50%': { strokeDasharray: '100, 100' },
          '100%': { strokeDasharray: '200, 0' },
        },
      },
      backgroundImage: {
        
      },
      screens: {
        'custom-md': '788px', // Custom breakpoint at 788px
      },
    },
  },
  plugins: [],
}

