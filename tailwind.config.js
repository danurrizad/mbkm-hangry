/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary1": "#FAFAFA",
        "text1": "#303030",
        "text2": "#707070",
        "text3": "#5A5A5A",
        "text4": "#A30926",
      },
    },
  },
  plugins: [],
}

