import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import MiTienda from "../views/Mitienda.vue";
import Contacto from "../views/Contacto.vue";
import PokemonDetalle from "../views/PokemonDetalle.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/tienda", name: "Mi Tienda", component: MiTienda },
    { path: "/contacto", name: "Contacto", component: Contacto },
    { path: "/pokemon/:id", name: "PokemonDetalle", component: PokemonDetalle, props: true },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
