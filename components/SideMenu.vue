<template>
  <div id="SideMenu">
    <v-row no-gutters class="pb-4">
      <v-card tile raised :elevation="shadow" width="100%">
        <v-list>
          <h2 class="font-weight-black mx-4">
            Get Envolved
          </h2>
          <h2 class="subtitle-1 mx-4 mb-3">
            See what God can do through you.
          </h2>
          <v-divider></v-divider>
          <v-list-item-group color="primary">
            <v-list-item v-for="(link, i) in sideMenu.GIitems" :key="i">
              <v-list-item-icon>
                <v-img :src="link.icon" contain max-width="30"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon>{{ link.link }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
    <v-row no-gutters class="pb-4">
      <v-card tile raised :elevation="shadow" width="100%">
        <v-list>
          <h2 class="font-weight-black mx-4">
            For Your 2 Family
          </h2>
          <h2 class="subtitle-1 mx-4 mb-3">
            See what God can do through your family.
          </h2>
          <v-divider></v-divider>
          <v-list-item-group color="primary">
            <v-list-item v-for="(link, i) in sideMenu.FYFitems" :key="i">
              <v-list-item-icon>
                <v-img :src="link.icon" contain max-width="40"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
    <v-row no-gutters class="pb-4">
      <v-card tile raised :elevation="shadow" width="100%">
        <v-list>
          <h2 class="font-weight-black mx-4">
            RTM Mobile App
          </h2>
          <h2 class="subtitle-1 mx-4 mb-3">
            Wherever you go, take us with you!
          </h2>
          <v-divider></v-divider>
          <v-list-item-group color="primary" class="pa-3 d-flex">
            <a
              href="https://apps.apple.com/us/app/revealing-truth/id1445042097?mt=8"
              style="display:inline-block;overflow:hidden;background:url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?releaseDate=2018-12-06&kind=iossoftware&bubble=ios_apps) no-repeat;width:135px;height:40px;"
            ></a>
            <a
              href="https://play.google.com/store/apps/details?id=io.pushpay.revealingtruth&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              ><v-img
                height="40px"
                width="150px"
                alt="Get it on Google Play"
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            /></a>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
    <v-row no-gutters class="pb-4">
      <v-card tile raised :elevation="shadow" width="100%">
        <v-list>
          <div class="pa-3">
            <v-img
              :src="require('@/assets/InFellowship.png')"
              width="180px"
            ></v-img>
          </div>

          <h2 class="subtitle-1 mx-4 mb-3">
            Keep up to date with your giving history, Ministry Groups, and more.
          </h2>
          <v-divider></v-divider>
          <v-list-item-group grow color="primary" class="d-flex pa-3">
            <v-btn x-large color="#D9E021" width="100%">SIGN IN</v-btn>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
    <v-row no-gutters class="pb-4">
      <v-card tile raised :elevation="shadow" width="100%">
        <v-list>
          <h2 class="font-weight-black mx-4">
            Stay Connected to RTM
          </h2>
          <v-divider></v-divider>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(link, i) in sideMenu.SCitems"
              :key="i"
              :href="link.link"
              target="_blank"
            >
              <v-list-item-icon>
                <v-img :src="link.icon"></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon>mdi-open-in-new</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      shadow: '15'
    }
  },
  computed: mapGetters({
    sideMenu: 'sideMenu'
  })
}
</script>

<style lang="sass" scoped>
#SideMenu
  h2
    font-size: 1.3em
    color: #999999
</style>
