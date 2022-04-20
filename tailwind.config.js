module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      // Black Lion Box color palette

      // L = Light Mode
      "L-Gray-dark": "#6D6F73",
      "L-Gray-med": "#A3AFC0",
      "L-Gray-light": "#F1F0F2",

      // D = Dark Mode
      "D-Gray-dark": "#2E2E30",
      "D-Gray-med": "#868F9B",
      "D-Gray-light": "#DCDBDB",

      // M = Main  brand color
      "M-Lime": "#DCDB37",

      // A = Alternative brand color
      "A-Magenta": "#DD156D",
      "A-Orange": "#F26722",
    },
    extend: {},
    fontFamily: {
      sans: ["Archivo Narrow", "sans-serif"],
      bellfort: ["BELLFORT", "sans-serif"],
      heading: ["Bebas Neue", "sans-serif"],
      gotham: ["GOTHAM", "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
