import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sitcon: {
          primary: "#385AAC",
          secondary: "#FFD287",
          color4: "#462002",
          color9: "#B1884C",
          color6: "#FFBF56",
          color7: "#FF8405",
          color8: "#F8F3E8",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Lato", "Noto Sans TC", "sans-serif"],
        rubik: ["Rubik", "Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
