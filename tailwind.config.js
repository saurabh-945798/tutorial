const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(131deg, #E8E5FE 26.82%, #FFEED8 96.89%)',
      },
      colors: {
        yellowGreen: {
          100: '#F0F4E5',
          200: '#D4E1B0',
          300: '#B9CE8F',
          400: '#9EB76E',
          500: '#7A9F4C',
          600: '#5E7C3A',
          700: '#4B6A2C',
          800: '#3A5B1E',
          900: '#2A4C10',
        },
        cyanGreen: {
          800: '#004D40', // Replace with your desired color code
        },
        cyan: {
          800: '#006064', // Replace with your desired color code
        },
      
        
      },
      backgroundImage: {
        'cyanGreen-gradient': 'linear-gradient(to bottom right, #004D40, #006064)', // Example gradient
      },
      
      
    },
  },
  plugins: [],
});