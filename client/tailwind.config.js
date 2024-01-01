/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './**/*.{html,js,jsx,ts}'
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

