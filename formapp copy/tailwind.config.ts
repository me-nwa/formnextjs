// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Add src directory if components are there
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B19573', // Example custom color
      },
    },
  },
  plugins: [],
}
