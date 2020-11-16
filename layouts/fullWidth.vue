<template>
  <v-app>
    <Nav />
    <v-content>
      <v-container id="fullWidth" fluid>
        <v-row justify="center">
          <v-col id="Main" class="col-sm-12 col-xs-12 col-md-12 col-lg-12 pt-0">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Nav from '@/components/Navigation/NavigationBar'

export default {
  components: {
    Nav
  },
  data() {
    return {
      drawer: false,

      items: [
        {
          icon: 'mdi-chart-bubble',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Sermons',
          to: '/sermons'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'locations',
          to: '/locations'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'About',
          to: '/about'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Get Involved',
          to: '/getinvolved'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Giving',
          to: '/giving'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Store',
          to: '/store'
        }
      ]
    }
  }
}
</script>

<style lang="sass">
body
    background-color: #FAFAFA

.col-sm-12
    @media (max-width: 600px)
        padding: 5px

#fullWidth
    padding: 0

#home-app-bar

  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
      color: red

    &:hover:before
      opacity: 0

    &:focus:before
      opacity: 0 !important
</style>
