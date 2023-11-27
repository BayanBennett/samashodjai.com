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
    },
    extend: {
      borderColor: ({ theme }) => ({
        DEFAULT: theme("colors.neutral.950"),
      }),
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["lofi"],
  },
};
export default config;
