import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...themes['light'],
          // 'error': '#ffffff',
        }
      },
      {
        dark: {
          ...themes['dark'],
        }
      }
    ]
  },
  plugins: [require("daisyui")],
} satisfies Config

