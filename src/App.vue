<script setup>
import { ref, computed, onMounted } from "vue";
import Titulo from "./components/Titulo.vue";
import Buscador from "./components/Buscador.vue";
import Mostrando from "./components/Mostrando.vue";
import ListaPokemons from "./components/ListaPokemons.vue";
import NoExiste from "./components/NoExiste.vue";

const busqueda = ref("");
const pokemones = ref([]);
const loading = ref(true);
const error = ref("");

async function cargarPokemones(limit = 100, offset = 0) {
    loading.value = true;
    error.value = "";
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        const detalles = await Promise.all(
        data.results.map(async (item) => {
            const resp = await fetch(item.url);
            const info = await resp.json();
            return {
                id: info.id,
                nombre: info.name,
                imagen: info.sprites.other["official-artwork"].front_default,
                altura: info.height * 10,
                peso: (info.weight / 10).toFixed(1),
                tipos: info.types.map((t) => t.type.name),
            };
        })
        );

        pokemones.value = detalles;
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
            <Mostrando :total="pokemones.length" :filtrados="pokemonesFiltrados.length" />
            <ListaPokemons :pokemones="pokemonesFiltrados" />
            <NoExiste v-if="pokemonesFiltrados.length === 0" />
        </div>
    </div>
</template>

<style>
body {
    background: linear-gradient(to bottom right, #f9f9f9, #e6f7ff);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>