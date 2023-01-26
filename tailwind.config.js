/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 5s ease-in-out",
        "spin-slow": "spin 2s linear infinite",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      }),

      colors: {
        pdblue: "#0D3580",
        plblue: "#1761B0",
        pllblue: "#548FCE",
        pgrey: "#282828",
        pblack: "#181818",
        plred: "#D2292D",
        pdred: "#AF0C15",
        bgdark: "#222531",
        bglight: "#dddbce",
      },
      fontFamily: {
        jetbrains: ["JetbrainsMono"],
        poppins: ["Poppins"],
        poppinsbold: ["PoppinsBold"],
      },
    },
  },
  plugins: [],
};
