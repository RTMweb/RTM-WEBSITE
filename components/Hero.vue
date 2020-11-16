<template>
  <v-card rounded max-width="100%" class="rounded-xl">
    <v-img id="hero-Img" class="white--text align-end pa-5" :src="img">
      <v-card-title class="maintext font-weight-black"
        >Heaven Is Enough Series:
        <span class="font-weight-light">
          It Begins With A Decision</span
        ></v-card-title
      >
      <v-card-actions>
        <v-row no-gutters>
          <v-col
            ><v-btn x-large color="lime accent-5" class="ma-2 pa-4"
              >Watch Sermon</v-btn
            ></v-col
          >
          <v-col
            ><v-btn x-large outlined color="white" class="ma-2 pa-4 button_full"
              >Watch more sermons</v-btn
            ></v-col
          >
        </v-row>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      img: require('@/assets/HeroImg.png')
    }
  }
}
</script>

<style scoped lang="sass">
.maintext
  font-size: 10vw;
</style>
