<template>
  <v-sheet id="annoucment" class="d-lg-flex d-md-flex-column rounded-lg">
    <v-icon icon="mdi-lock" color="grey darken-3" size="70" class="mr-5">
      mdi-alert-circle-outline
    </v-icon>

    <p>
      Three line text string example with two actions. One to two lines is
      preferable. Three lines should be considered the maximum string length on
      desktop in order to keep messages short and actionable.
    </p>

    <template>
      <v-btn depressed large color="white" class="">
        Learn more
      </v-btn>
    </template>
  </v-sheet>
</template>

<script>
export default {}
</script>

<style lang="sass">
#annoucment
    background-color: #CDDC39
    padding: 25px
    align-items: center

    p
        margin-right: 10px
</style>
