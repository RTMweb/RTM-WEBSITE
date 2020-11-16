<template>
  <v-card flat class="mx-auto">
    <v-toolbar flat class="mt-5 align-center">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        label="Search"
        outlined
        dense
      ></v-text-field>
      <v-btn class="ma-2" outlined fab x-small @click="closeDrawer">
        <v-icon>mdi-alpha-x</v-icon>
      </v-btn>
    </v-toolbar>
    <div class="d-flex justify-space-between mx-4">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="d-flex flex-column align-center"
      >
        <v-btn fab color="#D9E021" :to="item.to">
          <v-icon large :to="item.to">{{ item.icon }}</v-icon>
        </v-btn>
        <h3 class="caption mt-1 font-weight-bold">{{ item.title }}</h3>
      </div>
    </div>

    <v-list>
      <v-list-item
        v-for="item in MainLinks"
        :key="item.text"
        link
        :to="MainLinks.to"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <div class="pa-5 d-flex justify-space-between">
      <v-img
        :src="require('@/assets/InFellowship.png')"
        max-width="40%"
      ></v-img>
      <v-btn color="primary" text>
        Login
        <v-icon right> mdi-login-variant </v-icon>
      </v-btn>
    </div>
    <v-row class="pl-7">
      <v-list-item-title>Connect</v-list-item-title>
    </v-row>
    <v-toolbar flat>
      <v-btn text grow>
        <v-img :src="require('@/assets/Image3.png')"></v-img>
      </v-btn>
      <v-btn text grow>
        <v-img :src="require('@/assets/Image2.png')"></v-img>
      </v-btn>
      <v-btn text grow>
        <v-img :src="require('@/assets/Image4.png')"></v-img>
      </v-btn>
      <v-btn text grow>
        <v-img :src="require('@/assets/Image5.png')"></v-img>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-play-circle',
          title: 'Sermons',
          to: '/sermons'
        },
        {
          icon: 'mdi-map-marker',
          title: 'Locations',
          to: '/locations'
        },
        {
          icon: 'mdi-heart-outline',
          title: 'Giving',
          to: '/giving'
        },
        {
          icon: 'mdi-account-group',
          title: 'Get Involved',
          to: '/getinvolved'
        }
      ],
      MainLinks: [
        { text: 'Events', to: '/getinvolved' },
        { text: 'The Factory Kids', to: '/getinvolved' },
        { text: 'UR Student Ministry', to: '/getinvolved' },
        { text: 'Ministry Groups', to: '/getinvolved' },
        { text: 'Internships', to: '/getinvolved' },
        { text: 'Careers', to: '/getinvolved' },
        { text: 'Local Outreach', to: '/getinvolved' },
        { text: 'Global Outreach', to: '/getinvolved' }
      ]
    }
  },
  methods: {
    closeDrawer() {
      this.$emit('closeDrawer')
    }
  }
}
</script>

<style lang="sass">
#drawer
    justify-content: space-between
</style>
