import relumeTailwind from "@relume_io/relume-tailwind"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      DEFAULT: "30px",
      full: "9999px",
    },
    fontFamily: {
      sans: ["Satoshi", "sans-serif"],
      serif: ["Newsreader", "serif"],
    },
    fontSize: {
      sm: ["0.875rem", { lineHeight: "150%", letterSpacing: "-0.4px" }],
      base: ["1rem", { lineHeight: "150%", letterSpacing: "-0.4px" }],
      lg: ["1.125rem", { lineHeight: "150%", letterSpacing: "-0.4px" }],
      xl: ["1.25rem", { lineHeight: "150%", letterSpacing: "-0.4px" }],
      "2xl": ["1.5rem", { lineHeight: "140%", letterSpacing: "-0.4px" }],
      "3xl": ["1.875rem", { lineHeight: "140%", letterSpacing: "-0.4px" }],
      "4xl": ["2.25rem", { lineHeight: "140%", letterSpacing: "-0.4px" }],
      "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-1.28px" }],
      "6xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-1.28px" }],
      "7xl": ["4rem", { lineHeight: "1", letterSpacing: "-1.28px" }],
      "8xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-1.28px" }],
      "9xl": ["5rem", { lineHeight: "1", letterSpacing: "-1.28px" }],
      "10xl": ["6rem", { lineHeight: "1", letterSpacing: "-1.28px" }],
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
