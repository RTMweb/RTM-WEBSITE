<template>
  <div>
    <v-card>
      <v-img
        id="location"
        gradient="to bottom, rgba(77,77,77,.5), rgba(77,77,77,.5)"
        :src="require('@/assets/Locations/STPeteAboutbkgrd.png')"
        class="white--text align-end text-lg-center text-md-left overlay"
      >
        <div id="heroText">
          <div class="font-weight-black mb-2 text--white text-center display-1">
            RTM Nation
          </div>
          <div class="main font-weight-black mb-4 text--white">
            {{ location }}
          </div>
          <div class="d-flex justify-center">
            <v-card-actions>
              <v-btn width="150" x-large color="#D9E021" class="mx-2 pa-4"
                >DIRECTIONS</v-btn
              >
              <v-btn width="150" x-large color="#fff" class="mx-2 pa-4"
                ><v-icon>mdi-share-variant</v-icon>SHARE</v-btn
              >
            </v-card-actions>
          </div>
        </div>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: {
    location: { type: String, default: null },
    img: { type: String, default: null }
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass" scoped>
#heroText
    margin-bottom: 1%
    padding: 5%

.main
  font-size: 3em

  @media only screen and (min-width: 640px)
    font-size: 2em

  @media only screen and (min-width: 640px)
    font-size: 5em
</style>
