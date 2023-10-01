/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-50": "#E7E7ED",
        "primary-100": "#B9C2C8",
        "primary-200": "#928FAB",
        "primary-300": "#605C84",
        "primary-400": "#413C6D",
        "primary-600": "#100A42",
        "primary-800": "#0A0628",
        "primary-900": "#08051E",
        "primary-main": "#120B48",
        "title-color": "#141414",
        "grey": "#616163"
      },
      fontFamily: {
        "sora": '[var(--sora-font)]',
        "inter": '[var(--font-inter)]',
        "sen": '[var(--sen-font)]',
        "manrope": '[var(--font-manrope)]'
      }
    },
  },
  plugins: [],
}
