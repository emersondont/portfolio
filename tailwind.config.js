/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Inter': ['Inter', 'sans-serif']
      },
      colors: {
        primary: '#E2E8F0',
        secondary: '#a178b9',
        background: '#392657',
        blur: 'rgba(255,255,255,0.05)',
      }
    },
  },
  plugins: [],
}
