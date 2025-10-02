<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getPokemonDetalle } from "../api/pokemon.js";

const route = useRoute();
const id = route.params.id;

const pokemon = ref(null);
const loading = ref(true);
const error = ref("");

async function cargarPokemon() {
    loading.value = true;
    error.value = "";
    try {
        pokemon.value = await getPokemonDetalle(id);
    } catch (e) {
        console.error(e);
        error.value = "No se pudo cargar el Pokémon";
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    cargarPokemon();
});
</script>

<template>
    <div class="container py-5">
        <div v-if="loading" class="alert alert-info text-center">Cargando Pokémon...</div>
        <div v-else-if="error" class="alert alert-danger text-center">{{ error }}</div>
        <div v-else-if="pokemon" class="text-center">
            <h2 class="text-capitalize fw-bold mb-3">{{ pokemon.nombre }}</h2>
            <img :src="pokemon.imagen" :alt="pokemon.nombre" class="img-fluid mb-3" width="200" />

            <p><strong>ID:</strong> {{ pokemon.id }}</p>
            <p><strong>Altura:</strong> {{ pokemon.altura }} cm</p>
            <p><strong>Peso:</strong> {{ pokemon.peso }} kg</p>
            <p><strong>Tipos:</strong> {{ pokemon.tipos.join(", ") }}</p>
            <p><strong>Habilidades:</strong> {{ pokemon.habilidades.join(", ") }}</p>
            <p><strong>Experiencia base:</strong> {{ pokemon.base_experience }}</p>
        </div>
    </div>
</template>
