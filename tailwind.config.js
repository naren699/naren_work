/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        iris: {
          50: '#f5f2fb',
          100: '#ece5f7',
          200: '#d8cbef',
          300: '#bfa9e3',
          400: '#a888d6',
          500: '#8b6bc5',
          600: '#7355ab',
          700: '#5c4389',
          800: '#453267',
          900: '#2f2247',
          950: '#1c1530',
        },
      },
    },
  },
  plugins: [],
}