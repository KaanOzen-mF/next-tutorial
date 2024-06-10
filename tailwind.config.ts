import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../next-tutorial/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-r-from-orange-to-yellow":
          "linear-gradient(to right, #f9572a, #ffc905)",
        "custom-gradient": "linear-gradient(90deg, #2c1e19, #25200f)",
        "gradient-to-r-custom": "linear-gradient(90deg, #fd4715, #f9b241)",
        "action-gradient": "linear-gradient(90deg, #f9572a, #ff9b05)",
      },

      colors: {
        ff9b05: "#ff9b05",
        f9b241: "#f9b241",
        ddd6cb: "#ddd6cb",
        outlineColor: "#f99f2a",
        formFocusBg: "#1f252d",
        instructionsBg: "#6e6464",
        instructionsText: "#13120f",
        cfa69b: "#cfa69b",
      },
      padding: {
        "1/10": "10%",
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
      width: {
        "90%": "90%",
      },
      animation: {
        "fade-slide-in-left": "fade-slide-in-from-left 1s ease-out forwards",
        "fade-slide-in-right": "fade-slide-in-from-right 1s ease-out forwards",
        "fade-slide-in-bottom":
          "fade-slide-in-from-bottom 1s ease-out forwards",
      },
      maxWidth: {
        "320": "80rem",
        "240": "60rem",
      },
    },
  },
  plugins: [],
};
export default config;
