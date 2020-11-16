<template>
  <div>
    <LoHero
      location="Tampa, FL Campus"
      img="require('@/assets/Locations/RTMAboutbkgrd.png')"
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
