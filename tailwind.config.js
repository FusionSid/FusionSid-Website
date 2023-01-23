/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pdblue: "#0D3580",
        plblue: "#1761B0",
        pllblue: "#548FCE",
        pgrey: "#282828",
        pblack: "#181818",
        plred: "#D2292D",
        pdred: "#AF0C15",
      },
      fontFamily: {
        jetbrains: ["JetbrainsMono"],
        poppins: ["Poppins"],
        poppinsbold: ["PoppinsBold"]
      },
    },
  },
  plugins: [],
}