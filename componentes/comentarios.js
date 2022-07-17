Vue.component('comentarios',{
    data:function(){
        return {
            datos:[],
        }
    },
    template: `<div>
                <h1>Comentarios</h1>
                 <div v-if="datos.length == 0">
                    <p id="no-comentario">No hay comentarios.</p>
                 </div>
                 <ul v-else id="comentarios" v-for="(dato, index) in datos">
                    <li>
                    <a class="btn-close" @click="borrar(dato, index)" href="#"></a>
                    <p> Opinión de {{dato.nombre | capitalize({onlyFirstLetter:true})}} sobre {{dato.peli}}.<p>
                    <p v-for="valor in dato.puntuacion" v-bind:class="valor >=7  ? 'green' : 'red'">Puntuación: {{valor}}.</p>
                    <p>Comentario: "{{dato.comentario | capitalize({onlyFirstLetter:true})}}"</p>
                    </li>
                 </ul>
               </div>`,

    mounted:function(){
        this.obtenerDatos();
    },
    methods:{
        obtenerDatos:function(){
            this.datos = JSON.parse(localStorage.getItem('comentario'));
        },
        borrar:function(datos, index){
            let nuevosComentarios = this.datos;
            for (let valor of nuevosComentarios) {
                if (datos == valor) {
                    delete nuevosComentarios[index];
                    console.log(nuevosComentarios);
                }
            }
            nuevosComentarios = nuevosComentarios.filter(function(i) { return i !== null })
            nuevosComentarios = JSON.stringify(nuevosComentarios);
            console.log(nuevosComentarios);
            localStorage.setItem('comentario',nuevosComentarios);
            location.reload();
        },
    }
});