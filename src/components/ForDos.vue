<script setup>
import { ref } from 'vue'

const estudios = ['Universitario', 'Media', 'Magister', 'Doctorado']
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
const selectedEstudio = ref('')
const selectedDia = ref('')

function limpiarFormulario() {
    selectedEstudio.value = ''
    selectedDia.value = ''
}
</script>

<template>
    <div class="container mt-4">
        <h2 class="text-center">Formulario</h2>
        <div class="mb-3">
            <label class="form-label">Nivel de estudios:</label>
            <div>
                <div v-for="nivel in estudios" :key="nivel" class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" :id="nivel" :value="nivel" v-model="selectedEstudio" />
                    <label class="form-check-label" :for="nivel">{{ nivel }}</label>
                </div>
            </div>
        </div>

        <div class="mb-3">
            <label for="dia" class="form-label">Día de la semana:</label>
            <select id="dia" class="form-select" v-model="selectedDia">
                <option value="">-- Selecciona un día --</option>
                <option v-for="dia in dias" :key="dia" :value="dia">{{ dia }}</option>
            </select>
        </div>

        <div class="mt-4 p-3 border rounded bg-light">
            <h5>Resumen:</h5>
            <p>Estudios seleccionados: <strong>{{ selectedEstudio || 'No seleccionado' }}</strong></p>
            <p>Día seleccionado: <strong>{{ selectedDia || 'No seleccionado' }}</strong></p>
        </div>

        <button type="button" class="btn btn-secondary mb-3 mt-3" @click="limpiarFormulario">Limpiar</button>
    </div>
</template>

<style scoped>
.container {
    max-width: 500px;
}
</style>
