import type { Config } from "tailwindcss";
import DaisyUi from "daisyui";
import type { Config as DaisyUiConfig } from "daisyui";

const srcDir = ".";

export default {
  content: [
    `${srcDir}/components/**/*.{vue,js,ts}`,
    `${srcDir}/layouts/**/*.vue`,
    `${srcDir}/pages/**/*.vue`,
    `${srcDir}/composables/**/*.{js,ts}`,
    `${srcDir}/plugins/**/*.{js,ts}`,
    `${srcDir}/utils/**/*.{js,ts}`,
    `${srcDir}/App.{js,ts,vue}`,
    `${srcDir}/app.{js,ts,vue}`,
    `${srcDir}/Error.{js,ts,vue}`,
    `${srcDir}/error.{js,ts,vue}`,
    `${srcDir}/app.config.{js,ts}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Thai", "sans-serif"],
      },
    },
  },
  plugins: [DaisyUi],
  daisyui: {
    themes: ["light"],
  } as DaisyUiConfig,
} as Config;
