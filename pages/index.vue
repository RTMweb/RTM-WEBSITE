<template>
  <div>
    <v-row justify="center" no-gutters>
      <v-col col="8" class="pa-2">
        <annoucment />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col id="header" class="pa-2">
        <Hero />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col id="l-col" lg="8" md="8" sm="12" xs="12" class="pa-2">
        <v-row no-gutters>
          <v-col v-for="(tile, index) in tiles" :key="index" class="mb-4">
            <tile
              :title="tile.title"
              :subtitle="tile.subtitle"
              :smalltitle="tile.smalltitle"
              :bg-img="tile.bgimg"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col id="r-col" lg="4" md="4" sm="12" xs="12" class="pa-2">
        <SideMenu />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tile from '../components/tile.vue'
import annoucment from '../components/annoucment.vue'
import SideMenu from '../components/SideMenu.vue'
import Hero from '../components/Hero'

export default {
  components: {
    tile,
    annoucment,
    SideMenu,
    Hero
  },
  data() {
    return {
      item: 1
    }
  },

  computed: mapGetters({
    tiles: 'tiles'
  })
}
</script>

<style lang="sass">
.v-banner
  border-radius: 20px

.subhead
  margin: 0px 16px
</style>
