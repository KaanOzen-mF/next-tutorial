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
      },
      colors: {
        ff9b05: "#ff9b05",
        f9b241: "#f9b241",
      },
      padding: {
        "1/10": "10%",
      },
      gridTemplateColumns: {
        "auto-fill-minmax": "repeat(auto-fill, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
