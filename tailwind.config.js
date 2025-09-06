/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // make sure it points to your source files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
