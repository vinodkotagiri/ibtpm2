export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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