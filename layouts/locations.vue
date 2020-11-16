<template>
  <v-app>
    <Nav />
    <v-main>
      <v-container id="fullWidth" fluid>
        <v-row justify="center">
          <v-col id="Main" class="col-sm-12 col-xs-12 col-md-12 col-lg-12 pt-0">
            <v-navigation-drawer id="menu" clipped permanent>
              <v-list>
                <v-list-item link>
                  <v-list-item-content>
                    <v-list-item-title class="title"
                      >Plan Your Visit</v-list-item-title
                    >
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list
                v-for="location in locations"
                :key="location.campus"
                nav
                dense
              >
                <v-list-item link :to="location.link">
                  <v-list-item-icon>
                    <v-sheet class="pa-5" :color="location.color"></v-sheet>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ location.Campus }}</v-list-item-title>
                    <v-list-item-subtitle>
                      {{ location.Address }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-navigation-drawer>
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
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
      locations: [
        {
          Campus: 'Tampa Campus',
          Address: '5201 North Armenia Ave 33603',
          color: '#0060A6',
          link: '/Locations/TampaLocation'
        },
        {
          Campus: 'St Petersburg Campus',
          Address: '701 16th Street South 33705',
          color: '#D9E021',
          link: '/Locations/STPeteLocation'
        },
        {
          Campus: 'Wesley Chapel Campus',
          Address: '2644 Cypress Ridge Blvd 33544',
          color: '#939393',
          link: '/Locations/WCLocation'
        }
      ],

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
#menu
    position: absolute
    top: 5px
    z-index: 10
    margin: 0 0

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
