import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps'

Vue.use(Vuetify)

Vue.use(VueGoogleMaps, {
  load: { key: 'AIzaSyBl4Z_w-9sJshdFZsG0JWingLIUSTYAtQk' }
})

export default new Vuetify({
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  }
})
