<template>
	<v-app id="inspire">
		<v-navigation-drawer app v-model="drawer" dark color="green darken-2">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="title">
						Barbershopdeachterhoek.nl
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-list
					dense
					nav
			>
				<v-list-item
						v-for="item in items"
						:key="item.title"
						:to="item.to"
						link
				>
					<v-list-item-icon>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="green lighten-1" dark>
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<router-link to="/" class="logoHp">
		<v-img
				:style="height"
				height="80"
				contain
				dark
				position="start"
				src="http://0314media.nl/img/logo.webp"
				width="100"
		>
		</v-img>
			</router-link>
			<v-spacer></v-spacer>

			<v-btn icon v-for="i in headerIcons" :href="i.link">
				<v-icon>{{i.icon}}</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
      <v-lazy
          v-model="isActive"
          :options="{
          threshold: .5
        }"
          min-height="200"
          transition="fade-transition"
      >
        <router-view></router-view>
      </v-lazy>
		</v-main>
	</v-app>
</template>

<style>
	.logoHp {
		display: contents;
	}
	@media screen and (max-width:600px) {
		.logoHp {
			display: flex;
			width: 135px;
			height: 100px;
		}
	}
</style>
<script>

export default {
	computed: {
		height () {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return 'margin-top:1.2em'
			}
		},
	},
  components: {
  },
  data: () => ({
	 drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-view-dashboard',to:'/', },
          { title: 'Prijzen', icon: 'mdi-currency-eur',to:'/prijzen', },
		  { title: 'Fotos', icon: 'mdi-camera',to:'/fotos', },
          { title: 'Contact', icon: 'mdi-map-marker',to:'/contact', },
      ],
	  headerIcons: [
		  { icon:'mdi-phone',link:'tel:+310611263861'},
		  { icon:'mdi-whatsapp',link:'https://api.whatsapp.com/send?phone=+310611263861'},
		  { icon:'mdi-facebook',link:'https://www.facebook.com/Barbershop-De-Achterhoek-109519520965648'},
		  { icon:'mdi-instagram',link:'https://www.instagram.com/barbershopdeachterhoek/?hl=nl'},
	  ],
      right: null,
  }),
};
</script>
