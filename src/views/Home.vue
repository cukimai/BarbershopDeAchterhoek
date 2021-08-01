<template>
	<div>
		<v-lazy>
      <CarousselIntro></CarousselIntro>
		</v-lazy>
		<v-lazy>
<!--		<Ads></Ads>-->
		</v-lazy>
<!--		<v-lazy>-->
<!--		<OurTeam></OurTeam>-->
<!--		</v-lazy>-->
		<Footer></Footer>
	</div>
</template>

<script>
// @ is an alias to /src
import CarousselIntro from "@/components/homepage/CarousselIntro.vue";
import Ads from '@/components/homepage/Ads.vue'
import Footer from '@/components/Footer.vue'
import OurTeam from '@/components/OurTeam.vue'
import AskDilko from '@/components/OurTeam.vue'

export default {
  name: 'Home',
  components: {
    Ads,Footer,OurTeam,AskDilko,CarousselIntro
  },
    data: () => ({
        model: 0,
        colors: [
            'primary',
            'secondary',
            'yellow darken-2',
        ],
    }),
}
</script>
