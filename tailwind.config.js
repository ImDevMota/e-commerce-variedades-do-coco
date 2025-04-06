/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: { min: "320px", max: "425px" },
      md: { min: "426px", max: "768px" },
      lg: { min: "1024px", max: "1279px" },
      xl: { min: "768px", max: "1609px" },
    },
  },
  plugins: [],
};
