/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-white": "#C5B8B1",
        "app-yellow": {
          50: "#ffe199",
          60: "#d5b157",
        },
        "app-glass-white": {
          50: "#fff5",
          60: "#fff3",
          70: "#fff1"
        }
      },
      backgroundImage: {
        "app-gradient": "url(./gradient.jpg)"
      },
      fontFamily: {
        "app-font": "Sentient-Regular"
      }
    },
  },
  plugins: []
};