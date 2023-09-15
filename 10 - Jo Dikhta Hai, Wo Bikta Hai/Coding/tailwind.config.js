/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#171717',
        'custom-menu' : "#2E2E2E"
        // Add other custom colors here
      },
      
      fontFamily: {
        'custom' : 'BrittanySignature'
      },

    },
  },
  plugins: [],
}
