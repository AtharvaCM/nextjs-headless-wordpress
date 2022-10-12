/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,

    purgeLayersByDefault: true,
  },

  content: ["./src/components/**/*.js", "./pages/**/*.js"],

  theme: {
    extend: {
      height: {
        "almost-screen": "calc(-16rem + 100vh)",
      },
    },
  },

  variants: {},

  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
