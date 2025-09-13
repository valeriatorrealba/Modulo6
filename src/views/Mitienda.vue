<script setup>
import { ref, onMounted } from "vue";

const favoritos = ref([])

onMounted(() => {
    const saved = localStorage.getItem("favoritos")
    favoritos.value = saved ? JSON.parse(saved) : []
})
</script>

<template>
    <div class="container py-5">
        <h2 class="text-center mb-4">Mi Tienda</h2>

        <div v-if="favoritos.length === 0" class="text-center py-5">
            <h3>Aún no tienes Pokémon en tu tienda</h3>
            <p>Ve al detalle de un Pokémon y añádelo a la tienda para verlo aquí.</p>
        </div>

        <div v-else class="row">
            <div v-for="pokemon in favoritos" :key="pokemon.id" class="col-md-4 mb-4">
                <div class="card shadow-sm h-100 text-center p-3">
                    <img :src="pokemon.imagen" :alt="pokemon.nombre" class="img-fluid mb-2" />
                    <h5 class="text-capitalize">{{ pokemon.nombre }}</h5>
                    <p><strong>ID:</strong> {{ pokemon.id }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-weight: 700;
    color: #ff4141;
    text-shadow: 1px 1px #ffd6d6;
}
</style>
