/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Firacode: ["Fira Code", "monospace"],
      },
      colors: {
        // Light mode colors
        light: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          card: '#f1f5f9',
          hover: '#e2e8f0',
        },
        // Dark mode colors
        dark: {
          primary: '#241f31',
          secondary: '#2d2640',
          card: '#32303f',
          hover: '#3a3552',
        },
        // Brand colors
        brand: {
          light: '#0284c7',
          dark: '#38bdf8',
        },
        // Text colors
        text: {
          light: {
            primary: '#1a1625',
            secondary: '#2d2640',
            muted: '#475569',
          },
          dark: {
            primary: '#e5e5e5',
            secondary: '#a3a3a3',
            muted: '#6b7280',
          },
        },
      },
    },
    screens: {
      'esm': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
});
