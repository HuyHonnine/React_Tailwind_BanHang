/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blueBackground: "#0f3460",
        redColor: "#e94560",
        grayBackground: "#F0F0F0",
      },
      boxShadow: {
        shadowbox: '0 1px 3px rgb(3 0 71 / 9%)',
      },
    },
  },
  plugins: [],
}

