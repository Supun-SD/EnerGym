/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#021526",
        secondary: "#D9D9D9",
      },
      fontFamily: {
        lato: ["Lato-Regular", "sans-serif"],
        madimi: ["MadimiOne-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
