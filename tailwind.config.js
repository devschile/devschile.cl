/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
        mono: ["Incosolata", "monospace"]
      },
    },
  },
  plugins: [],
}

