/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        cabin: ["Cabin", "sans-serif"],
        pacifico: ["Pacifico", "sans-serif"],
      }
    },
  },
  plugins: [],
}
