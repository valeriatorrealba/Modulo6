<script setup>
import { ref, computed, onMounted } from "vue";
import { getPokemones } from "../api/pokemon.js";
import Titulo from "../components/Titulo.vue";
import Buscador from "../components/Buscador.vue";
import Mostrando from "../components/Mostrando.vue";
import ListaPokemons from "../components/ListaPokemons.vue";
import NoExiste from "../components/NoExiste.vue";

const busqueda = ref("");
const pokemones = ref([]);
const loading = ref(true);
const error = ref("");

async function cargarPokemones(limit = 100, offset = 0) {
    loading.value = true;
    error.value = "";
    try {
        pokemones.value = await getPokemones(100,0);
    } catch (e) {
        console.error(e);
        error.value = "No se pudo cargar la lista de Pokemones";
    } finally {
        loading.value = false;
    }
}

const pokemonesFiltrados = computed(() => {
    return pokemones.value.filter((p) =>
        p.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    );
});

function limpiar() {
    busqueda.value = "";
}

onMounted(() => {
    cargarPokemones(100, 0);
});
</script>

<template>
    <div class="container py-5">
        <Titulo />
        <div v-if="loading" class="alert alert-info text-center">Cargando Pokémon...</div>
        <div v-else-if="error" class="alert alert-danger text-center">
            {{ error }}
            <button class="btn btn-sm btn-outline-light ms-2" @click="cargarPokemones()">Reintentar</button>
        </div>
        <div v-else>
            <Buscador v-model="busqueda" @limpiar="limpiar" />
            <Mostrando :total="pokemones.length" :filtrados="pokemonesFiltrados.length"/>
            <ListaPokemons :pokemones="pokemonesFiltrados" />
            <NoExiste v-if="pokemonesFiltrados.length === 0" />
        </div>
    </div>
</template>
