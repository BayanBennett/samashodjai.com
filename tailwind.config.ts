import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
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
