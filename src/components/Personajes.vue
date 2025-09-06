<script>
import { personajesData } from '../data/personajes.js'

export default {
    data() {
        return {
            personajes: personajesData
        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Lista de Pokemones</h2>

        <div class="row">
            <div v-for="personaje in personajes" :key="personaje.id" class="col-md-4 mb-3">
                <div class="card shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title">{{ personaje.nombre }}</h5>
                        <p class="card-text">{{ personaje.descripcion }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>