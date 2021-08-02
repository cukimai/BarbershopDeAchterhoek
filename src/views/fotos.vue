<template>
    <v-container>
    <v-row>
        <v-col v-for="foto in fotos" class="d-flex child-flex" cols="4">
          <v-img
              :src="require(`../assets/fotos/${foto}.jpg`)"
              :lazy-src="require(`../assets/fotos/${foto}.jpg`)"
              aspect-ratio="1"
              class="grey lighten-2"
          ></v-img>
        </v-col>
    </v-row>
    </v-container>
</template>
<script>
    export default {
      data () {
        return {
          fotos:[1,2,3,4,5,6,7]
        }}}
</script>