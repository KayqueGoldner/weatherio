import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#131214",
        "surface": "#1D1C1F",
        "on-background": "#EAE6F2",
        "black-alpha-10": "#0000001A",
        "white-alpha-8": "#FFFFFF14",
        "aqi-1": "#89E589",
        "on-aqi-1": "#1F331F",
        "aqi-2": "#E5DD89",
        "on-aqi-2": "#33311F",
        "aqi-3": "#E5C089",
        "on-aqi-3": "#332B1F",
        "aqi-4": "#E58989",
        "on-aqi-4": "#331F1F",
        "aqi-5": "#E589B7",
        "on-aqi-5": "#331F29",
      }
    },
    screens: {
      "xs": "480px",
      ...defaultTheme.screens
    }
  },
  plugins: [],
}
export default config
