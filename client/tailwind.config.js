/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
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

