/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   './**/*.{html,js,jsx}'
  //   // './src/**/*.{js,ts,jsx,tsx}', 
  //   // './index.html',
  //   // './src/components/**/*.{js,ts,jsx,tsx}',
  //   // './src/pages/**/*.{js,ts,jsx,tsx}',
  // ],
  content: ["./dist/**/*.{html,css ,js,jsx}"],
  theme: {
    extend: {
      height:{
        custom: 'calc(100vh - 48px)'
      }
    },
  },
  plugins: [],
}

