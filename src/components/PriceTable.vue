<template>
	<div>
		<v-data-table
				:headers="headers"
				:items="knippen"
				item-key="name"
				class="elevation-1"
				:custom-filter="filterOnlyCapsText"
        :hide-default-footer="true"
        :disable-sort="true"
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
                        prijs: 20,
                    },
                    {
                        name: 'Knippen Zero Fade',
                        prijs: 20,
                    },
                    {
                        name: 'Knippen t/m 10 jaar',
                        prijs: 17,
                    },
                    {
                        name: 'Baard scheren',
                        prijs: 14,
                    },
                    {
                        name: 'Baard bewerken',
                        prijs: 14,
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
                        text: 'Prijs',
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