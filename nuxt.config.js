import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'universal',
  target: 'server',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/scss/colors.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/map', mode: 'client' },
    { src: '@/plugins/google-maps', mode: 'client' }
  ],
  components: true,
  transpile: [/^vue2-google-maps($|\/)/],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyBl4Z_w-9sJshdFZsG0JWingLIUSTYAtQk',
          authDomain: 'rtmtest-911fa.firebaseapp.com',
          databaseURL: 'https://rtmtest-911fa.firebaseio.com',
          projectId: 'rtmtest-911fa',
          storageBucket: 'rtmtest-911fa.appspot.com',
          messagingSenderId: '17588095381',
          appId: '1:17588095381:web:890e2dc666956b55678e9c',
          measurementId: 'G-C8S2GC89V8'
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ],

    ['@nuxtjs/style-resources']
  ],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
