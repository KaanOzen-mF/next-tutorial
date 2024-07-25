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
      colors: {
        "gradient-radial": "radial-gradient(#282c34, #282c34)",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      textShadow: {
        "golden-glow": "0 0 18px rgba(248, 190, 42, 0.8)",
      },
    },
  },
  plugins: [],
};
