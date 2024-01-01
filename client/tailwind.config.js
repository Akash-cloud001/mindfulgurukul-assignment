/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      height:{
        custom: 'calc(100vh - 48px)'
      }
    },
  },
  plugins: [],
}

