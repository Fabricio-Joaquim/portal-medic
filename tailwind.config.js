/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        spinPerson: 'spin 988ms cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
      },
      gridTemplateColumns: {
        "dashboard": "0.2fr 1.6fr",
      },
      gridTemplateRows: {
        "dashboard": "1fr",
      },
    },
  },
  plugins: [],
}
