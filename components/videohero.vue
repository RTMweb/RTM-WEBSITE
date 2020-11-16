<template>
  <v-content id="vid">
    <video id="bgvid" playsinline autoplay muted loop poster>
      <source
        src="https://www.videvo.net/videvo_files/converted/2017_08/videos/170724_15_Setangibeach.mp486212.mp4"
        type="video/mp4"
      />
    </video>
    <v-container class="center-image faded-bg" fluid fill-height>
      <v-img
        src="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F06%2FEarth-PNG-HD.png&f=1"
        max-height="300"
        contain
      >
      </v-img>
    </v-container>
  </v-content>
</template>

<script>
export default {
  layout: 'fullWidth',
  data() {
    return {}
  }
}
</script>

<style>
#vid {
  position: absolute;
}

video {
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
}

.center-image {
  position: relative;
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.faded-bg {
  background: rgba(0, 0, 0, 0.66);
  position: fixed;
}
</style>
