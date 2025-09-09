<script>
export default {
    data() {
        return {
            busqueda: "",
            pokemones: [
                { id: "1", nombre: "pikachu" },
                { id: "2", nombre: "kakuna" },
                { id: "3", nombre: "beedrill" },
                { id: "4", nombre: "metapod" },
                { id: "5", nombre: "rattata" },
                { id: "6", nombre: "bulbasaur" },
                { id: "7", nombre: "charmander" },
                { id: "8", nombre: "squirtle" },
                { id: "9", nombre: "jigglypuff" },
                { id: "10", nombre: "meowth" },
                { id: "11", nombre: "psyduck" },
                { id: "12", nombre: "machop" },
                { id: "13", nombre: "geodude" },
                { id: "14", nombre: "gengar" },
                { id: "15", nombre: "snorlax" },
                { id: "16", nombre: "eevee" },
                { id: "17", nombre: "vaporeon" },
                { id: "18", nombre: "jolteon" },
                { id: "19", nombre: "flareon" },
                { id: "20", nombre: "mewtwo" },
                { id: "21", nombre: "mew" },
                { id: "22", nombre: "pidgey" },
                { id: "23", nombre: "pidgeotto" },
                { id: "24", nombre: "pidgeot" },
                { id: "25", nombre: "abra" },
                { id: "26", nombre: "kadabra" },
                { id: "27", nombre: "alakazam" },
                { id: "28", nombre: "onix" },
                { id: "29", nombre: "dragonite" },
                { id: "30", nombre: "zapdos" }
            ]
        };
    },
    computed: {
        pokemonesFiltrados() {
        return this.pokemones.filter((p) =>
            p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
        );
        }
    },
    methods: {
        limpiar() {
        this.busqueda = "";
        }
    }
};
</script>

<template>
    <div class="container py-5">
        <h1 class="text-center mb-4">Pokédex</h1>
        <div class="row mb-4 justify-content-center">
            <div class="col-md-6 d-flex">
                <input v-model="busqueda" type="text" class="form-control form-control-lg shadow-sm me-2" placeholder="Busca un Pokémon por nombre..."/>
                <button class="btn btn-outline-danger btn-lg shadow-sm" @click="limpiar">Limpiar</button>
            </div>
        </div>

        <div class="alert alert-primary text-center fw-semibold" role="alert">
            <p class="mb-0">Mostrando {{ pokemonesFiltrados.length }} de {{ pokemones.length }} pokemones</p>
        </div>

        <div class="row g-4">
            <div v-for="pokemon in pokemonesFiltrados" :key="pokemon.id" class="col-md-4 col-lg-3">
                <div class="card pokemon-card shadow-sm">
                    <div class="card-body text-center">
                        <h5 class="card-title text-capitalize fw-bold">{{ pokemon.nombre }}</h5>
                        <p class="text-muted">N.º {{ pokemon.id }}</p>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="pokemonesFiltrados.length === 0" class="text-center mt-5">
            <p class="fs-4 fw-semibold text-danger">El Pokémon que deseas buscar no existe</p>
        </div>
    </div>
</template>

<style>
body {
    background: linear-gradient(to bottom right, #f9f9f9, #e6f7ff);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
    font-weight: 700;
    color: #ff4141;
    text-shadow: 1px 1px #ffd6d6;
}

.pokemon-card {
    border: none;
    border-radius: 15px;
    background: white;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pokemon-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.card-title {
    color: #333;
}

.text-muted {
    font-size: 0.9rem;
}
</style>
