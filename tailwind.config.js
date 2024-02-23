import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      arial: ["Arial"],
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#0F1374",
        "secondary": "#1C74E4",
        "accent": "#f7f7f7",
        "neutral": "#D9D9D9",
        "info": "#000000",
        "success": "#009336",
        "warning": "#db9900",
        "error": "#e11d48",
      },
    },],
  },
}