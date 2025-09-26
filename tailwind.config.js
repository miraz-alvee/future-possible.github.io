// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Adjust if you use the pages directory
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],  // Add Poppins to the theme
      },
    },
  },
  plugins: [],
}
