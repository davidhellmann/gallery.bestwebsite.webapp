/*
 * Tailwind Color Settings
 */

const colors = require('tailwindcss/colors')

module.exports = {
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    black: colors.black,
    white: colors.white,
    gray: colors.warmGray,
    beige: {
      100: '#F6F4F3',
      500: '#E9E2E2',
    },
    yellow: {
      500: '#FFEC2D',
      600: '#ebd82d',
    },
    green: {
      500: '#19BD0A',
      600: '#19a90a',
    },
    blue: {
      200: '#B8CFDA',
      300: '#a4bbc6',
      800: '#003B5C',
      900: '#002748',
    },
  },
}
