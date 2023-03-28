/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sanofiSansBold: ['sanofiSansBold', 'sans-serif'],
        sanofiSansBoldItalic: ['sanofiSansBoldItalic', 'sans-serif'],
        sanofiSansItalic: ['sanofiSansItalic', 'sans-serif'],
        sanofiSansRegular: ['sanofiSansRegular', 'sans-serif'],
        sanofiSansLight: ['sanofiSansLight', 'sans-serif'],
        sanofiSansLightItalic: ['sanofiSansLightItalic', 'sans-serif'],
      },
      colors: {
        sanofiPurpleDark: '#22004C',
        sanofiPurple: '#7A01E6',
        sanofiGray: '#F4F2F7',
        sanofiSecondaryOrange: '#CF483E',
        secondaryBlue: '#525CA3',
        secondaryRed: '#CF483E',
        secondaryPink: '#BE006B',
        secondaryGreen: '#478040',
      },
    },
  },
  plugins: [],
};
