<template>
  <v-navigation-drawer clipped permanent>
    <v-list>
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">Plan Your Visit</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list v-for="location in locations" :key="location.campus" nav dense>
      <v-list-item link :to="location.link">
        <v-list-item-icon>
          <v-sheet class="pa-5" :color="location.color"></v-sheet>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ location.Campus }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ location.Address }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          Campus: 'Tampa Campus',
          Address: '5201 North Armenia Ave 33603',
          color: '#0060A6',
          link: '/Locations/TampaLocation'
        },
        {
          Campus: 'St Petersburg Campus',
          Address: '701 16th Street South 33705',
          color: '#D9E021',
          link: '/Locations/STPeteLocation'
        },
        {
          Campus: 'Wesley Chapel Campus',
          Address: '2644 Cypress Ridge Blvd 33544',
          color: '#939393',
          link: '/Locations/WCLocation'
        }
      ]
    }
  }
}
</script>
