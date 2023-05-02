/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        primaryBlue: "#3b82f6",
        primaryIndigo: "#3730a3",
      },
      animation :{
        "spin-slow": 'spin 8s linear infinite'
      },
      backgroundImage: {
        circleLight: 'repeating-radial-gradient(rgba(0,0,0,0.4)2px, #f5f5f5 5px,#f5f5f5 100px);' ,
        circleLightlg: 'repeating-radial-gradient(rgba(0,0,0,0.4)2px, #f5f5f5 8px,#f5f5f5 80px);' ,
        circleLightmd: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 6px,#f5f5f5 60px)",
        circleLightsm: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 4px,#f5f5f5 40px)",
      },
     
    },
    screens: {
      xxl: { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}
