<template>
	<div>
		<v-data-table
				:headers="headers"
				:items="knippen"
				item-key="name"
				class="elevation-1"
				:custom-filter="filterOnlyCapsText"
		>
		</v-data-table>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                prijs: '',
                knippen: [
                    {
                        name: 'Knippen',
                        prijs: 18,
                    },
                    {
                        name: 'Knippen Zero Fade',
                        prijs: 20,
                    },
                    {
                        name: 'Knippen t/m 10 jaar',
                        prijs: 15,
                    },
                    {
                        name: 'Baard scheren',
                        prijs: 12,
                    },
                    {
                        name: 'Baard bewerken',
                        prijs: 12,
                    },
                    {
                        name: 'Contouren',
                        prijs: 5,
                    },
                    {
                        name: 'Wassen',
                        prijs: 4,
                    },
                    {
                        name: 'Harsen neus & oorharen',
                        prijs: 5,
                    },
                    {
                        name: 'Haren, wangen & wenkbrawuen',
                        prijs: 5,
                    },
                    {
                        name: 'Gezichtsmasker met stoom',
                        prijs: 12,
                    },
                ],
            }
        },
        computed: {
            headers () {
                return [
                    {
                        text: 'Behandeling',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {
                        text: 'Prijzen',
                        value: 'prijs',
                        filter: value => {
                            if (!this.prijs) return true

                            return value < parseInt(this.prijs)
                        },
                    },
                ]
            },
        },
        methods: {
            filterOnlyCapsText (value, search, item) {
                return value != null &&
                    search != null &&
                    typeof value === 'string' &&
                    value.toString().toLocaleUpperCase().indexOf(search) !== -1
            },
        },
    }
</script>