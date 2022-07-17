const inicio = {
    template: `<peliculas></peliculas>`, name:"inicio-pelicula"
};

const comentarios = {
    template: `<comentarios></comentarios>`, name:"comentario"
};

const routes = [
    {path: '/', component: inicio},
    {path: '/comentarios', component: comentarios},
    {path: '*', redirect: '/'},
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el:'#app',
    router
});