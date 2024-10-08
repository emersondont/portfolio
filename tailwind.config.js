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
        primary: '#faf5ff',
        secondary: '#a855f7',
        tertiary: '#CF9CFC',
        background: '#3b0764',
        blur: 'rgba(88,28,135,0.5)'
      }
    },
    screens: {
      'ssm': '370px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px'
    }
  },
  plugins: [],
}
