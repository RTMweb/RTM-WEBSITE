<template>
  <div>
    <GmapMap
      :center="{ lat: 10, lng: 10 }"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    </GmapMap>
  </div>
</template>

<script>
export default {
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    this.$refs.mapRef.$mapPromise.then((map) => {
      map.panTo({ lat: 1.38, lng: 103.8 })
    })
  }
}
</script>
