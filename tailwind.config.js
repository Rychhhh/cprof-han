module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hero': '#6FBCC6',
        'card': '#93E89B',  
        'footer': '#93E89B',
        'project': '#e9ebde',
        'project-footer': '#af6b3e'   
      },
      fontFamily: {
        whyte: 'Whyte',
        poppins: 'Poppins',
        baloo: 'Baloo'
      },
      animation: {
        bounce: "bounce 5s linear infinite"
      },
      keyframes: {
        bounce : {
          "0%": {
            "left": "0%",
          },
          "100%": {
            "right": "0%"
          }
        }
      },
     
    },
  },
  plugins: [],
}
