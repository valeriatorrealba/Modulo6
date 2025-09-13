<template>
    <footer class="bg-dark text-white pt-5 pb-3 mt-5">
        <div class="container text-center">
            <h5 class="fw-bold mb-3" style="color: #ff4141;">Mi Pokédex</h5>
            <p>Explora, captura y conoce a todos los Pokémon. ¡Tu tienda y favoritos siempre a mano!</p>

            <div class="d-flex justify-content-center gap-3 mt-3">
                <a href="#" class="text-white">
                    <img src="https://img.icons8.com/color/48/000000/pokeball.png" alt="Pokéball" width="40">
                </a>
                <a href="#" class="text-white">
                    <img src="https://img.icons8.com/color/48/000000/pokeball.png" alt="Pokéball" width="40">
                </a>
                <a href="#" class="text-white">
                    <img src="https://img.icons8.com/color/48/000000/pokeball.png" alt="Pokéball" width="40">
                </a>
            </div>

        <hr class="bg-light mt-4" />
        <p class="mb-0">&copy; 2025 Mi Pokédex. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
footer {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

footer a:hover img {
    transform: scale(1.2);
    transition: 0.3s;
}
</style>
