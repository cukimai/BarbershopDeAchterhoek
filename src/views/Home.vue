<template>
	<div>
    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
    >
      <CarousselIntro></CarousselIntro>
		</v-lazy>
    <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        transition="fade-transition"
    >
      <Stars></Stars>
		</v-lazy>
		<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        transition="fade-transition"
    >
      <Popup></Popup>
		</v-lazy>
		<Footer></Footer>
	</div>
</template>

<script>
import Stars from "@/components/homepage/Stars";
import CarousselIntro from "@/components/homepage/CarousselIntro.vue";
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Footer,CarousselIntro,Stars
  },
    data: () => ({
      isActive: false,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
        ],
    }),
}
</script>
