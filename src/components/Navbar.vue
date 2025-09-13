<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div class="container">
            <router-link class="navbar-brand fw-bold" to="/">Pokédex</router-link>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Acerca de</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tienda">Tienda</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contacto">Contacto</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
