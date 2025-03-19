export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors:{
        light:{
          primary:'#a29bfe'
        }
      }
    },
  },
  plugins: [require('daisyui')],
}