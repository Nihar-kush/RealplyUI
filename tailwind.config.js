/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-top-left": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
            transform: "translateX(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            transform: "translateX(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-top-left": "fade-top-left 0.5s ease-out",
        "fade-in-up": "fade-in-up 2s ease-out",
        "fade-out-up": "fade-out-up 2s ease-out",
      },
    },
  },
  plugins: [],
};
