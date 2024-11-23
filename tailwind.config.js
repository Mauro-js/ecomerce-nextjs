/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      menu: "clamp(2em,5vw, 5em)",
      ofert: "clamp(0.8em, 1.3vh, 1.2em)",
      title: "clamp(2em,3vw, 5em)",
      subTitle: "clamp(3em,2vw, 5em)",
      layouSize: "clamp(1em, 1vw, 4em)",
      layoutButtons: "clamp(0.6em, 0.8vw, 2em)",
      buyButton: "clamp(0.7em, 0.6vw, 0.8em)",
    },
    extend: {
      colors: {
        primary: "#7aa65a",
        secondary: "#b2cb9f",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        menuSelect: "0 5px 0 0 #7aa65a;",
        mobileMenuSelect: "0 2px 0 0 #7aa65a;",
      },
      spacing: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [
  ],
};
