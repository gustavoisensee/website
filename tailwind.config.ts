import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
      }
    ]
  },
  plugins: [require("daisyui")],
} satisfies Config

