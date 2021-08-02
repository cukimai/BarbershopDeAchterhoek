<template>
	<v-container>
		<v-row>
			<v-col>	<PriceTable></PriceTable></v-col>
		</v-row>
	</v-container>

</template>

<script>
import PriceTable from '@/components/PriceTable.vue'

    export default {
        name: 'Prijzen',
        components: {
            PriceTable
        }
    }
</script>