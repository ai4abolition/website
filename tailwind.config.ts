import type { Config } from "tailwindcss"
import relumeTailwind from "@relume_io/relume-tailwind"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
      serif: ["Newsreader", "serif"],
    },
    borderRadius: {
      DEFAULT: "30px",
    },
    colors: {
      "black-olive": {
        50: "#D6D7D6",
        100: "#ACAFAD",
        200: "#838684",
        300: "#595E5B",
        400: "#202421",
      },
    },
  },
  presets: [relumeTailwind],
  plugins: [],
}
export default config
