<template>
    <div>
        <Pokemon :pokemon="pokemon" v-for="(pokemon, index) in pokemons" :key="index" />
    </div>
</template>

<script setup>
// import pokemons from "@/assets/sampledataset.json";
import Pokemon from "./Pokemon.vue"

import {ref, onMounted} from "vue"
import client from "@/assets/apiclient.js"

const pokemons = ref([])


// mount and then make api call

onMounted(()=>{
    client.get("/pokemon").then(res => {
        console.log("response recieved", res.data),
        pokemons.value = res.data
}).catch(errors =>{
        console("errors", errors)
    })
})

</script>