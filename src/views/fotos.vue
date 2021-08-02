<template>
    <v-container>
    <v-row>
        <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/1.jpg`)"
                    :lazy-src="require(`../assets/fotos/1.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/2.jpg`)"
                    :lazy-src="require(`../assets/fotos/2.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
        <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/3.jpg`)"
                    :lazy-src="require(`../assets/fotos/3.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
      <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/4.jpg`)"
                    :lazy-src="require(`../assets/fotos/4.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
      <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/5.jpg`)"
                    :lazy-src="require(`../assets/fotos/5.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
      <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/6.jpg`)"
                    :lazy-src="require(`../assets/fotos/6.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
      <v-col class="d-flex child-flex" cols="4">
            <v-img
                    :src="require(`../assets/fotos/7.jpg`)"
                    :lazy-src="require(`../assets/fotos/7.jpg`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
            >
                <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                        <v-progress-circular
                                indeterminate
                                color="grey lighten-5"
                        ></v-progress-circular>
                    </v-row>
                </template>
            </v-img>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>

    export default {
        name: 'Fotos',
        components: {
        }
    }
</script>