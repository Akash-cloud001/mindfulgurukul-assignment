/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{html,js,jsx}',
    './src/pages/**/*.{html,js,jsx}',
    './index.html',
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

