<template>
  <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      :hide-default-footer="true"
      :disable-sort="true"
      class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
  data () {
    return {
      disableFiltering:true,
      disableSort:true,
      showExpand:false,
      headers: [
        {
          text: 'Openingstijden',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Maandag', value: 'maandag' },
        { text: 'Dinsdag', value: 'dinsdag' },
        { text: 'Woensdag', value: 'woensdag' },
        { text: 'Donderdag', value: 'donderdag' },
        { text: 'Vrijdag', value: 'vrijdag' },
        { text: 'Zaterdag', value: 'zaterdag' },
        { text: 'Zondag', value: 'zondag' },
      ],
      desserts: [
        {
          name: 'Barbershop de Achterhoek',
          maandag: '12:00 - 18:00',
          dinsdag: '09:00 - 18:00',
          woensdag: '09:00 - 18:00',
          donderdag: '09:00 - 20:00',
          vrijdag: '09:00 - 20:00',
          zaterdag: '09:00 - 19:00',
          zondag: '13:00 - 18:00'
        },
      ],
    }
  },
}
</script>