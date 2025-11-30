import type { Config } from 'tailwindcss'
import themes from 'daisyui/src/theming/themes'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
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

