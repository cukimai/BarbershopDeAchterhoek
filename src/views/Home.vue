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
<!--		<Ads></Ads>-->
		</v-lazy>
		<v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        transition="fade-transition"
    >
      <Popup></Popup>
<!--		<OurTeam></OurTeam>-->
		</v-lazy>

		<Footer></Footer>
	</div>
</template>

<script>
// @ is an alias to /src
import Popup from "@/components/homepage/Popup";
import Stars from "@/components/homepage/Stars";
import CarousselIntro from "@/components/homepage/CarousselIntro.vue";
import Ads from '@/components/homepage/Ads.vue'
import Footer from '@/components/Footer.vue'
import OurTeam from '@/components/OurTeam.vue'
import AskDilko from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Ads,Footer,OurTeam,AskDilko,CarousselIntro,Stars,Popup
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
