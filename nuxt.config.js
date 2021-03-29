import path from 'path'
import { defineNuxtConfig } from '@nuxtjs/composition-api'

export default defineNuxtConfig({
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  generate: {
    // choose to suit your project
    interval: 3000,
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: false,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://composition-api.nuxtjs.org/getting-started/setup/
    '@nuxtjs/composition-api',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://tailwindcss.nuxtjs.org/
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
  ],
  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL + '/api' || '',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    assetBaseUrl: process.env.ASSET_BASE_URL || 'http://localhost:3000',
    apiToken: process.env.GRAPHQL_TOKEN || '',
    appName: process.env.npm_package_name || '',
  },
  privateRuntimeConfig: {
    apiToken: process.env.GRAPHQL_TOKEN || '',
  },
  apollo: {
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Router
   ** See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router
   */
  router: {
    base: '/',
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/404.vue'),
    //   })
    // },
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/sites/sotd/:year/:month/:day/:slug',
          components: {
            default: resolve(__dirname, 'pages/sites/_slug'), // or routes[index].component
          },
        },
        {
          path: '/links/:year/:month/:day/:slug',
          components: {
            default: resolve(__dirname, 'pages/links/_slug'), // or routes[index].component
          },
        },
        {
          path: '*',
          components: {
            default: resolve(__dirname, 'pages/404'), // or routes[index].component
          },
        }
      )
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    postcss: {
      plugins: {
        'postcss-hexrgba': {},
      },
    },
    preset: {
      stage: 1, // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
    transpile: ['vuex-composition-helpers'],
  },
  tailwindcss: {
    jit: true,
  },
})
