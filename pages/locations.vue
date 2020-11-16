<template>
  <div>
    <v-layout class="back">
      <GMap />
    </v-layout>
  </div>
</template>

<script>
import GMap from '@/components/Locations/GMap'

export default {
  components: {
    GMap
  },
  layout: 'locations',
  data() {
    return {}
  }
}
</script>

<style lang="sass">
.back
  z-index: -2

.front
  z-index: 1
</style>
