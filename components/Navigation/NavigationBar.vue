<template>
  <div id="Nav">
    <v-navigation-drawer v-model="drawer" app right temporary width="450">
      <Drawer @closeDrawer="closeDrawer" />
    </v-navigation-drawer>
    <v-app-bar id="home-app-bar" color="grey darken-3" height="120">
      <nuxt-link to="/">
        <icon-base
          width="60"
          height="60"
          icon-name="Logo"
          icon-color="white"
          class="mr-2"
          ><RTMLogo
        /></icon-base>
      </nuxt-link>
      <nuxt-link to="/">
        <v-toolbar-title
          class="title white--text font-weight-bold text-uppercase hidden-sm-and-down"
          >Revealing Truth Ministries</v-toolbar-title
        ></nuxt-link
      >
      <nuxt-link to="/">
        <v-toolbar-title
          class="white--text font-weight-black text-uppercase hidden-md-and-up display-3"
          >RTM</v-toolbar-title
        ></nuxt-link
      >
      <v-spacer></v-spacer>
      <div width="100%" class="hidden-md-and-down mx-auto">
        <v-tabs optional background-color="rgba(255, 0, 0, 0.0)" white>
          <v-tabs-slider color="lime accent-2"></v-tabs-slider>
          <v-tab
            v-for="(item, index) in items"
            :key="index"
            :to="item.to"
            :ripple="false"
            active-class="lime--text accent-2"
            class="font-weight-bold white--text"
            min-width="96"
            color="white"
          >
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer" />
    </v-app-bar>
  </div>
</template>

<script>
import IconBase from '@/components/icons/IconBase'
import RTMLogo from '@/components/icons/RTMLogo'
import Drawer from '@/components/Navigation/Drawer'

export default {
  components: {
    IconBase,
    RTMLogo,
    Drawer
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
  },
  methods: {
    closeDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="sass">
a
  text-decoration: none

#home-app-bar
    margin: 0
    padding: 0px 1% 0% 1%

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
