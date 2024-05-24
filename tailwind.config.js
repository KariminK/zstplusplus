/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      kreon: '"Kreon", serif',
      code: `"Source Code Pro", monospace`,
    },
    extend: {
      blur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
