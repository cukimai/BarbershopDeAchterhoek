<template>
  <div class="text-center ma-2">
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        absolute
        dark
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Sluiten
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: true,
    text: `Maak nu een afspraak en bel: 06 1126 3861`,
    timeout: 10000,
  }),
  mounted () {
  }
}
</script>

<style scoped>

</style>