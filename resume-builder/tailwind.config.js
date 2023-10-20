/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx}"],
    theme: {
      extend: {
        colors: {
          light: "#E1D8CF",
          dark: "#373740",
          primary: "#43434C",
        },
      },
    },
    plugins: [],
  };