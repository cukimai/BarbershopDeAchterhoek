<template>
  <div class="text-center py-5">
    <a class="text-decoration-none" href="https://g.page/r/Cc85aAd4aX7pEAg/review">
    <v-rating
        v-model="rating"
        background-color="black lighten-3"
        color="black"
        large
        length="5"
        size="64"
        value="15"
        hover
        class="text-center"
    ></v-rating>
    </a>
    5 Sterren gebaseerd op 121 Google reviews!

  </div>

</template>

<script>

export default {
  data: () => ({
    rating: 5,
  }),
  mounted () {
  }
}
</script>

<style scoped>

</style>