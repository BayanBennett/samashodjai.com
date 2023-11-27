import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      borderColor: ({ theme }) => ({
        ...theme("colors"),
        DEFAULT: "colors.gray.500",
      }),
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["lofi"],
  },
};
export default config;
