import { on } from "events";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "card-on": `inset -2px -2px 1px rgba(255, 255, 255, 0.76), inset -2px -2px 5px rgba(255, 255, 255, 0.7), inset 1px 1px 4px rgba(0, 0, 0, 0.41), inset 4px 4px 4px 1px rgba(85, 85, 85, 0.39)`,
        "card-off": `-4px 5px 3px rgba(255, 255, 255, 0.8), -2px -2px 2px 1px rgba(255, 255, 255, 0.8), 1px 1px 3px 1px rgba(0, 0, 0, 0.3), 3px 3px 4px 3px rgba(0, 0, 0, 0.2)`
      }
    }, 
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': {
        dark: '#7F0000',
        DEFAULT: '#FF0000',
        desaturated: '#E53C3C',
        darkdesaturated: '#7C1F1F',
      },
      'orange': {
        dark: '#7F3C0E',
        DEFAULT: '#FF7A1A',
        desaturated: '#E59055',
        darkdesaturated: '#7C4E2E',
      },
      'yellow': {
        dark: '#FFFF00',
        DEFAULT: '#FFEB35',
        desaturated: '#E5D36C',
        darkdesaturated: '#7C723A',
      },
      'green': {
        dark: '#007F0F',
        DEFAULT: '#00FF29',
        desaturated: '#3CE548',
        darkdesaturated: '#1F7C28',
      },
      'blue': {
        dark: '#11637F',
        DEFAULT: '#20BCFF',
        desaturated: '#5AC7E5',
        darkdesaturated: '#316C7C',
      },
      'purple': {
        dark: '#652E7F',
        DEFAULT: '#D25AFF',
        desaturated: '#C78FE5',
        darkdesaturated: '#6B4D7C',
      },
      'gray': {
        darkest: '#1A202C',
        dark: '#2D3748',
        DEFAULT: '#6D6D6D',
        light: '#CBD5E0',
        lightest: '#EDF2F7',
      },
      'skintone1': {
        DEFAULT: '#FFE7D1',
      },
      'skintone2': {
        DEFAULT: '#E6BC98',
      },
      'skintone3': {
        DEFAULT: '#D4AA78',
      },
      'skintone4': {
        DEFAULT: '#BE794A',
      },
      'skintone5': {
        DEFAULT: '#84583A',
      },
      'skintone6': {
        DEFAULT: '#4C291C',
      },
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
















