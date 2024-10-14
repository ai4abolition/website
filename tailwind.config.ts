import relumeTailwind from "@relume_io/relume-tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
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
      full: "9999px",
    },
    extend: {
      colors: {
        "black-olive": {
          50: "#D6D7D6",
          100: "#ACAFAD",
          200: "#838684",
          300: "#595E5B",
          400: "#202421",
        },
        "cadet-grey": {
          50: "#E8EDEE",
          100: "#D2DCDE",
          200: "#BBCACD",
          300: "#A5B9BD",
          400: "#8EA7AC",
        },
        "earth-yellow": {
          50: "#F9F1E2",
          100: "#F4E3C5",
          200: "#EED5A7",
          300: "#E9C78A",
          400: "#E3B96D",
        },
        "persian-orange": {},
        "reseda-green": {
          50: "#E6E7E2",
          100: "#CCCEC5",
          200: "#B3B6A8",
          300: "#999D8B",
          400: "#80856E",
        },
        timberwolf: {
          50: "#F9F8F6",
          100: "#F4F1ED",
          200: "#EEEAE4",
          300: "#E9E3DB",
          400: "#E3DCD2",
        },
      },
    },
  },
  presets: [relumeTailwind],
  plugins: [],
}
export default config
