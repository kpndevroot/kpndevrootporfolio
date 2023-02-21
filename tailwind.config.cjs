/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Firacode: ["Fira Code ", "Fira Code"],
      },
    },
    screens: {
      esm: "500px",
    },
    colors: {
      dark_bg: "#241f31",
      // Configure your color palette here
    },
  },
  plugins: [],
});
