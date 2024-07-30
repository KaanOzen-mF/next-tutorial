/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          "0%, 100%": { color: "#e9e9e9" },
          "50%": { color: "#b89b84" },
        },
        "fade-slide-in-from-left": {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        loading: "loading 1.2s ease-in-out infinite",
        "fade-slide-in-from-left":
          "fade-slide-in-from-left 1s ease-out forwards",
        "fade-slide-in-from-right":
          "fade-slide-in-from-right 1s ease-out forwards",
        "fade-slide-in-from-bottom":
          "fade-slide-in-from-bottom 1s ease-out forwards;",
      },
      colors: {
        "gradient-radial": "radial-gradient(#282c34, #282c34)",
        "custom-outline": "#f99f2a",
        "custom-bg": "#1f252d",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      textShadow: {
        "golden-glow": "0 0 18px rgba(248, 190, 42, 0.8)",
        "title-shadow": "0 0 0.5rem rgba(0, 0, 0, 0.5);",
      },
      boxShadow: {
        custom: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
        actionShadow: "0 2px 5px rgba(0, 0, 0, 0.3);",
      },
    },
  },
  plugins: [],
};
