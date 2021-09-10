<template>
	<div>
    <v-lazy
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition"
    >
      <CarousselIntro></CarousselIntro>
		</v-lazy>
    <v-lazy
        :options="{
          threshold: .5
        }"
        transition="fade-transition"
    >
      <Stars></Stars>
		</v-lazy>
		<v-lazy
        :options="{
          threshold: .5
        }"
        transition="fade-transition"
    >
		</v-lazy>
    <Openingstijden></Openingstijden>
		<Footer>

    </Footer>
	</div>
</template>

<script>
import Stars from "@/components/homepage/Stars";
import CarousselIntro from "@/components/homepage/CarousselIntro.vue";
import Footer from '@/components/Footer.vue'
import Openingstijden from "./Openingstijden";

export default {
  name: 'Home',
  components: {
    Footer,CarousselIntro,Stars,Openingstijden
  },
    data: () => ({
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
        ],
    }),
}
</script>
