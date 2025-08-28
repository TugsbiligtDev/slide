/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pineder-teal': '#5EEAD4',
        'pineder-blue': '#60A5FA',
        'pineder-purple': '#D8B4FE',
      },
      fontFamily: {
        'outfit': ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
