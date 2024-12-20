/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkColor: "#45474B",
        darkGreen: "#495E57",
        sunYellow: "#F4CE14",
        almostWhite: "#F5F7F8",
      },
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
