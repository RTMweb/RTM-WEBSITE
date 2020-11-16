<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Times</v-card-title>
          <v-card-subtitle
            >Choose a time and add it to your calendar</v-card-subtitle
          >
          <v-chip class="ma-2 pa-3" label large>
            <div>
              <div>Wednesday</div>
              <div>9:00AM</div>
            </div>
            <v-icon right>mdi-label</v-icon>
          </v-chip>
          <v-chip class="ma-2 pa-3" label>
            <div>
              <v-card-title class="text-overline">Wednesday</v-card-title>
              <v-card-subtitle class="text-h5">9:00AM</v-card-subtitle>
            </div>
            <v-icon right>mdi-label</v-icon>
          </v-chip>
        </v-card>
      </v-col>
      <v-col>Collom Two</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="sass"></style>
