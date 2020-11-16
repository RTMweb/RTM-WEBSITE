<template>
  <v-card class="mx-auto tile" max-width="100%">
    <v-img class="white--text align-end pa-2" height="400" :src="bgImg">
      <v-card-title class="headline font-weight-black"
        >{{ title }}
        <span class="font-weight-light"> {{ smalltitle }}</span></v-card-title
      >
      <v-card-subtitle class="white--text">
        {{ subtitle }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn x-large color="white" class="pa-4">Learn More</v-btn>
      </v-card-actions>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    bgImg: { type: String, default: null },
    title: { type: String, default: null },
    smalltitle: { type: String, default: null },
    subtitle: { type: String, default: null }
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.title
  padding: 0
</style>
