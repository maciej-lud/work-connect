/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        base: ["14px", "1.4"],
      },
      fontWeight: {
        medium: 500,
      },
    },
  },
  plugins: [],
};
