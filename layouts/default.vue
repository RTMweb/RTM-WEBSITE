<template>
  <v-app>
    <Nav :drawer="drawer" />

    <v-main>
      <v-container fluid class="pt-0">
        <v-row justify="center">
          <v-col class="col-sm-12 col-xs-12 col-md-10 col-lg-8">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from '@/components/Navigation/NavigationBar'

export default {
  components: {
    Nav
  },
  data() {
    return {
      drawer: 'hi'
    }
  }
}
</script>

<style lang="sass">
body
    background-color: #FAFAFA

#Main
    @media (max-width: 600px)
        padding: 0
</style>
