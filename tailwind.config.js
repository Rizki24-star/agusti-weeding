/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      navy: "#001E6B",
      gold: "#948979",
      lightBrown: "#DFD0B8",
      black: "#1E1E1E",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
