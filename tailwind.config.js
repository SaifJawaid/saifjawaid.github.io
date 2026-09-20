/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f5f0e6",
        charcoal: "#171b22",
        body: "#41434a",
        muted: "#777064",
      },
    },
  },
  plugins: [],
}
