<template>
  <div>
    <LoHero
      location="St Petersburg, FL Campus"
      img="require('@/assets/Locations/STPeteAboutbkgrd.png')"
    />
    <v-container>
      <v-row class="mx-auto">
        <v-col cols="12" md="6" sm="12" class="pr-1">
          <v-sheet class="mb-8">
            <div class="text-h4 font-weight-bold ml-1">Times</div>
            <div class="text-subtitle my-2 ml-1">
              Choose a time and add it to your calendar
            </div>
            <v-row class="ml-1">
              <v-card class="d-flex pa-2">
                <div>
                  <div>Sunday</div>
                  <div class="text-h6">9:00AM</div>
                </div>
                <v-icon class="ml-2">mdi-plus-circle-outline</v-icon>
              </v-card>
              <v-card class="d-flex pa-2 ml-5">
                <div>
                  <div>Sunday</div>
                  <div class="text-h6">9:00AM</div>
                </div>
                <v-icon class="ml-2">mdi-plus-circle-outline</v-icon>
              </v-card>
            </v-row>
          </v-sheet>
          <v-sheet class="mb-8">
            <div class="text-h4 font-weight-bold mb-5">Location Info</div>

            <v-card class="d-flex pa-4">
              <v-icon class="mr-4">mdi-car</v-icon>
              <div>
                <div class="text-body-1">
                  Parking is available both in the main parking lot and in the
                  rear of the main building. Attendants will direct you as you
                  make it on campus.
                </div>
              </div>
            </v-card>
          </v-sheet>
          <v-sheet class="" justify="space-around">
            <div class="text-h4 font-weight-bold mb-5">Senior Pastors</div>

            <div
              class="d-flex pa-4 elevation-3 justify-space-between align-center"
              justify="space-around"
            >
              <v-avatar size="120" color="grey lighten-4" class="mr-4">
                <img src="/static/apple-touch-icon-180x180.png" alt="avatar" />
              </v-avatar>

              <div class="text-body-1">
                Bryan & Rashida Powe
              </div>

              <div>
                <v-btn>
                  <v-icon left>mdi-email-outline</v-icon>
                  Contact
                </v-btn>
              </div>
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="12" md="6" sm="12" class="pl-1">Collom Two</v-col>
      </v-row>
    </v-container>
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
