/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#189AB4",
          100: "#05445E",
        },
        babyBlue: "#D4F1F4",
        mint: "#75E6DA",
      },
    },
  },
  plugins: [],
};
