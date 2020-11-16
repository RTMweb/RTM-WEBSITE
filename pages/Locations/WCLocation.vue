<template>
  <div>
    <LoHero
      location="Wesley Chapel, FL Campus"
      img="require('@/assets/Locations/WCAboutbkgrd.png')"
    />
  </div>
</template>

<script>
import LoHero from '@/components/Locations/LocationHero'
export default {
  layout: 'fullWidth',
  components: {
    LoHero
  },
  data() {
    return {}
  }
}
</script>

<style lang="sass"></style>
