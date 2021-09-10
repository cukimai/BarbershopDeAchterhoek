<template>
	<v-footer
			dark
			padless
	>
		<v-card
				class="flex"
				flat
				tile
		>
			<v-card-text class="py-2 green lighten-1 white--text text-center">
				{{ new Date().getFullYear() }} — <strong>Barbershopdeachterhoek.nl</strong>
			</v-card-text>
      <Openingstijden></Openingstijden>
		</v-card>
	</v-footer>
</template>

<script>
import Openingstijden from "../views/Openingstijden";
    export default {
      components: {
        Openingstijden
      },
        data: () => ({
			headerIcons: [
				{ icon:'mdi-phone',link:'tel:0611263861'},
				{ icon:'mdi-whatsapp',link:'https://api.whatsapp.com/send?phone=0634016976'},
				{ icon:'mdi-facebook',link:'https://www.facebook.com/Barbershop-De-Achterhoek-109519520965648'},
				{ icon:'mdi-instagram',link:'https://www.instagram.com/barbershopdeachterhoek/?hl=nl'},
			],
        }),
    }
</script>