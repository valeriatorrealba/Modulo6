<script setup>
import { ref } from 'vue';
const nombre = ref('')
const correo = ref('')
const edad = ref('')
const mostrar = ref(false)

function registrar() {
    if (nombre.value && correo.value && edad.value) {
        mostrar.value = true
    } else {
        alert('Por favor, completa todos los campos.')
        mostrar.value = false
    }
}

function limpiar() {
    nombre.value = ''
    correo.value = ''
    edad.value = ''
    mostrar.value = false
}
</script>

<template>
    <div class="container mt-5 w-50 mx-auto">
        <h2 class="text-center mb-4">Formulario de Registro</h2>

        <form @submit.prevent="registrar" class="mb-4">
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" id="nombre" v-model="nombre" class="form-control" placeholder="Ingresa tu nombre">
            </div>

            <div class="mb-3">
                <label for="correo" class="form-label">Correo electrónico</label>
                <input type="email" id="correo" v-model="correo" class="form-control" placeholder="Ingresa tu correo">
            </div>

            <div class="mb-3">
                <label for="edad" class="form-label">Edad</label>
                <input type="number" id="edad" v-model="edad" class="form-control" placeholder="Ingresa tu edad">
            </div>

            <button type="submit" class="btn btn-primary me-2">Registrar</button>
            <button type="button" class="btn btn-secondary" @click="limpiar">Limpiar</button>
        </form>

        <div v-if="mostrar" class="card p-3 shadow-sm">
            <h4>Resumen de Datos</h4>
            <p><strong>Nombre:</strong> {{ nombre }}</p>
            <p><strong>Correo:</strong> {{ correo }}</p>
            <p><strong>Edad:</strong> {{ edad }}</p>
        </div>
    </div>
</template>

<style>

</style>
