/*
 * Opatciy Map for Colors
 * https://www.viget.com/articles/tips-for-your-tailwind-config/
 * */

// Settings
const settingsGrid = require('./tailwindcss/tailwind.settings.grid')
const settingsFontSizes = require('./tailwindcss/tailwind.settings.fontSizes')
const settingsColors = require('./tailwindcss/tailwind.settings.colors')
const settingsProse = require('./tailwindcss/tailwind.settings.prose')

// Plugins
const pluginAddComponents = require('./tailwindcss/tailwind.plugins.addComponents')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
    layers: ['base', 'components', 'utilities'],
    mode: 'layers',
    options: {
      whitelist: ['./assets/css/**/*.{css}'],
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Rubik', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'Times New Roman', 'Times', 'serif'],
      mono: ['"Courier New"', 'Courier', 'monospace'],
    },
    fontSize: settingsFontSizes.fontSize,
    colors: settingsColors.colors,
    extend: {
      spacing: {
        '50vh': '50vh',
      },
      zIndex: {
        1000: '1000',
        10000: '10000',
        100000: '100000',
      },
      gridTemplateColumns: { ...settingsGrid.gridTemplateColumns },
      gridColumn: { ...settingsGrid.gridColumn },
      gridRowStart: { ...settingsGrid.gridRowStart },
      gridRowEnd: { ...settingsGrid.gridRowEnd },
      // Typography Plugin
      typography: (theme) => settingsProse(theme),
    },
  },
  variants: {},
  corePlugins: {
    float: false,
    container: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')({
      modifiers: ['md'],
    }),
    require('tailwindcss-question-mark'),
    function ({ addComponents }) {
      addComponents(pluginAddComponents)
    },
  ],
}
