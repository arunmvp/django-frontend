/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandPink: "#e37177", // your custom color
      },
      fontFamily: {
        script: ["Pacifico", "cursive"], // for headings
        serifBold: ["Playfair Display", "serif"], // for nav
      },
    },
  },
  plugins: [],
};
