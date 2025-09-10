<script setup>
const props = defineProps({pokemones: Array,});
</script>

<template>
    <div class="row g-4">
        <div v-for="pokemon in pokemones" :key="pokemon.id" class="col-md-4 col-lg-3">
            <div class="card pokemon-card shadow-sm">
                <div class="card-body text-center">
                    <img :src="pokemon.imagen" :alt="pokemon.nombre" class="img-fluid mb-3"width="120" height="120"/>
                    <h5 class="card-title text-capitalize fw-bold">{{ pokemon.nombre }}</h5>
                    <p class="text-muted">N.º {{ pokemon.id }}</p>
                    <p><strong>Altura:</strong> {{ pokemon.altura }} cm</p>
                    <p><strong>Peso:</strong> {{ pokemon.peso }} kg</p>
                    <p><strong>Tipo:</strong> {{ pokemon.tipos.join(", ") }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.pokemon-card {
    border: none;
    border-radius: 15px;
    background: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pokemon-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(180, 24, 24, 0.1);
}

.card-title {
    color: #333;
}

.text-muted {
    font-size: 0.9rem;
}
</style>