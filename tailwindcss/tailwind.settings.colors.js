/*
 * Tailwind Color Settings
 */

const { white, black, warmGray } = require('tailwindcss/colors')

module.exports = {
  current: 'currentColor',
  transparent: 'transparent',
  black,
  white,
  gray: warmGray,
  blue: {
    50: '#fafcff',
    100: '#fafcff',
    200: '#d1e5ff',
    300: '#a3cbff',
    400: '#66a8ff',
    500: '#0571ff',
    600: '#0061e0',
    700: '#0054c2',
    800: '#004094',
    900: '#002657',
  },
  gold: {
    DEFAULT: '#C1A15D',
  },
}
