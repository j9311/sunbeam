module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        big: "2rem",
      },
    },

    fontFamily: {
      display: ["Teko", "Arial", "sans-serif"],
      body: ["Heebo", "sans-serif"],
      bungee: ["Bungee", "sans-serif"],
      serial: ['"Libre Barcode 39 Text"'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
