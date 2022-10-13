/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
        "11": "repeat(11, minmax(0, 1fr))",
        "30": "repeat(30, minmax(0, 1fr))",
        // Complex site-specific row configuration
        layout: "200px minmax(900px, 1fr) 100px",
      },
      gridRow: {
        "span-11": "span 11 / span 11",
      },
    },
  },
  plugins: [],
};
