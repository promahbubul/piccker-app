/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1 : "16px",
        h2 : "14px",
        h3 : "12px",
        h4 : "10px",
        h5 : "8px"
      },
      width: {
        "93": "375px"
      },
      height: {
        "203": "812px"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-main": "#847c3d",
        "primary-surface": "#fff9cb",
        "primary-pressed": "#005499",
        "base-white": "#ffffff",
        "base-highlight": "#fbfbfb",
        "base-background": "#f2f4f8",
        "base-light-grey": "#dde1e6",
        "base-grey": "#c1c7cd",
        "base-dark-grey": "#878d96",
        "base-text": "#444444",
        "base-black": "#121619",
        "danger-main": "#cb3a31",
        "danger-surface": "#fff4f2",
        "danger-border": "#eeb4b0",
        "danger-pressed": "#921825",
        "warning-main": "#ffd700",
        "warning-surface": "#fef9f1",
        "warning-border": "#f9d79f",
        "warning-pressed": "#7a5f00",
        "success-main": "#4bb543",
        "success-surface": "#e0fae0",
        "success-border": "#b8e3b5",
        "success-pressed": "#21822a",
        "info-main": "#016db2",
        "info-surface": "#c9f3fb",
        "info-border": "#005499",
        "info-pressed": "#003f80",
      },
    },
  },
  plugins: [],
};

