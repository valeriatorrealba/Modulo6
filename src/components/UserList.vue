<script setup>
const usuarios = [
    { nombre: 'Juan', apellido: 'Pérez', fechaNacimiento: '15-05-1990', edad: 33 },
    { nombre: 'María', apellido: 'Gómez', fechaNacimiento: '30-10-1985', edad: 38 },
    { nombre: 'Carlos', apellido: 'López', fechaNacimiento: '20-01-2000', edad: 23 }
];
</script>

<template>
    <div class="container mt-5">
        <h2 class="text-center mb-4">Listado de Usuarios</h2>

        <table class="table table-bordered table-striped table-hover shadow-sm custom-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(usuario, index) in usuarios" :key="index">
                    <td>{{ usuario.nombre }}</td>
                    <td>{{ usuario.apellido }}</td>
                    <td>{{ usuario.fechaNacimiento }}</td>
                    <td>{{ usuario.edad }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.custom-table {
    background-color: #f0f8ff;
    border: 2px solid #1e90ff;
}

.custom-table th {
    background-color: #1e90ff;
    color: white;
    text-align: center;
}

.custom-table td {
    text-align: center;
}
</style>