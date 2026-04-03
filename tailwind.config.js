/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-dark": "#1e2732",
        "card-light": "#ffffff",
        "card-dark": "#1a2632",
        "text-main-light": "#111418",
        "text-main-dark": "#e0e6ed",
        "text-sub-light": "#617589",
        "text-sub-dark": "#9ba6b3",
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"],
        "body": ["Noto Sans", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
