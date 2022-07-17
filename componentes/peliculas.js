Vue.component('peliculas',{
    data:function(){
        return {
            peliculas: [
                {
                    nombre: 'Doctor strange en el multiverso de la locura',
                    anio: 2022,
                    duracion: '2h 6m',
                    sinopsis: 'Viaja a lo desconocido con el Doctor Strange, quien, con la ayuda de tanto antiguos como nuevos aliados místicos, recorre las complejas y peligrosas realidades alternativas del multiverso.',
                    genero:'Acción - Aventura - Fantasía',
                    img: 'imgs/doctor.jpg',
                },
                {
                    nombre: 'El misterio de marilyn monroe: las cintas inéditas',
                    anio: 2022,
                    duracion: '1h 46m',
                    sinopsis: 'Documental que explora el misterio de la muerte del icono del cine Marilyn Monroe a través de entrevistas inéditas con su círculo más cercano.',
                    genero:'Documentales',
                    img: 'imgs/marilyn.jpg',
                },
                {

                    nombre:'Ecos de un crimen',
                    duracion:'1h 24m',
                    anio: 2022,
                    sinopsis: 'Julián Lemar es un escritor de best-sellers de suspenso quien se va de vacaciones con su familia a una cabaña en un bosque. A partir de ese momento, el peligro y el engaño son una amenaza constante.',
                    genero:'Thriller',
                    img: 'imgs/crimen.jpg',
                    
                },
                {
                    nombre: 'Blacklight',
                    anio: 2022,
                    duracion: '1h 48m',
                    sinopsis: 'Travis Block, un agente del gobierno en la sombra que se especializa en eliminar operativos cuyas coberturas han sido expuestas, descubre una conspiración mortal dentro de sus propias filas que alcanza los niveles más altos del poder.',
                    genero:'Acción - Thriller',
                    img: 'imgs/blacklight.jpg',
                },
                {
                    nombre: 'Uncharted',
                    anio: 2022,
                    duracion: '1h 56m',
                    sinopsis: 'Un descendiente del explorador Sir Francis Drake descubre la ubicación de la legendaria ciudad de El Dorado. Trabajará para descubrir secretos, mientras sobreviven en una isla. Adaptación del aclamado videojuego homónimo.',
                    genero:'Acción - Aventura',
                    img: 'imgs/uncharted.jpg',
                },
                {
                    nombre:'Animales fantásticos 3: los secretos de dumbledore',
                    duracion:'2h 23m',
                    anio: 2022,
                    sinopsis: 'El profesor Albus Dumbledore sabe que el poderoso mago oscuro Gellert Grindelwald está haciendo planes para apoderarse del mundo mágico.',
                    genero:'Aventura - Familia - Fantasía',
                    img: 'imgs/secretos.jpg',
                    
                },
                {

                    nombre:'Granizo',
                    duracion:'1h 58m',
                    anio: 2022,
                    sinopsis: 'Después de que le llueven críticas por fallar en el pronóstico de una tormenta, un meteorólogo se refugia en la casa de su hija e inicia un viaje de autodescubrimiento.',
                    genero:'Comedia - Drama',
                    img: 'imgs/granizo.jpg',
                    
                },
                {

                    nombre:'Sonic 2: la película',
                    duracion:'2h 2m',
                    anio: 2022,
                    sinopsis: 'Después de establecerse en Green Hills, Sonic se muere por demostrar que tiene madera de auténtico héroe, pero Robotnik regresa con nuevo compañero Knuckles, en busca de una esmeralda que tiene el poder de destruir civilizaciones.',
                    genero:'Acción - Animación - Aventura',
                    img: 'imgs/sonic.jpg',
                    
                },
                {
                    nombre: 'Spider-Man: sin camino a casa',
                    anio: 2021,
                    duracion: '2h 28m',
                    sinopsis: 'Peter Parker está desenmascarado y ya no puede separar su vida normal de las altas apuestas de ser un superhéroe.',
                    genero:'Acción - Aventura Fantasía',
                    img: 'imgs/spider-man.jpg',
                },
                {
                    nombre:'Cruella',
                    anio: 2021,
                    duracion:'2h 14m',
                    sinopsis: '«Cruella» se sumerge en la juventud rebelde de uno de los villanos más conocidos -y más de moda-, nada menos que la legendaria Cruella de Vil.',
                    genero:'Comedia - Crimen',
                    img: 'imgs/cruella.jpg',
                },
                {
                    nombre:'Joker',
                    anio: 2019,
                    duracion:'2h 1m',
                    sinopsis: 'Situada en los años 80′. Un cómico fallido es arrastrado a la locura, convirtiendo su vida en una vorágine de caos y delincuencia que poco a poco lo llevará a ser el psicópata criminal más famoso de Gotham.',
                    genero:'Crimen - Drama - Thriller',
                    img: 'imgs/joker.jpg',
                },
                {
                    nombre:'Expediente warren: obligado por el demonio',
                    anio: 2021,
                    duracion:'1h 52m',
                    sinopsis: 'Los investigadores paranormales Ed y Lorraine Warren se encuentran con lo que se convertiría en uno de los casos más sensacionales de sus archivos.',
                    genero:'Misterio - Terror - Thriller',
                    img: 'imgs/conjuro.jpg',
                },
                {
                    nombre:'Coco',
                    anio: 2021,
                    duracion:'1h 45m',
                    sinopsis: 'Coco nos descubre el misterio de compartir la reunión familiar más extraordinaria y sorprendente, incluso con aquellos antepasados que murieron muchos años atrás.',
                    genero:'Acción - Animación - Aventura',
                    img: 'imgs/coco.jpg',
                },
                {
                    nombre:'La purga: infinita',
                    duracion:'1h 43m',
                    anio: 2021,
                    sinopsis: 'El gobierno decide que una noche al año, durante doce horas, cualquier actividad criminal, incluso el asesinato, será legal.',
                    genero:'Acción - Ciencia Ficción - Terror',
                    img: 'imgs/purga.jpg',
                    
                },
                {
                    nombre:'It: capítulo 2',
                    duracion:'2h 49m',
                    anio: 2019,
                    sinopsis: '27 años después, los ex-miembros del Club de los Perdedores, que crecieron y se mudaron lejos de Derry, vuelven a unirse tras una devastadora llamada telefónica.',
                    genero:'Drama - Fantasía - Terror',
                    img: 'imgs/it-2.jpg',
                    
                },
                {
                    nombre:'Eternals',
                    duracion:'2h 37m',
                    anio: 2021,
                    sinopsis: 'La historia épica, que abarca miles de años, presenta a un grupo de héroes inmortales que se ve obligado a salir de las sombras para reunirse contra el enemigo más antiguo de la humanidad: los Desviantes.',
                    genero:'Acción - Aventura - Drama',
                    img: 'imgs/eternals.jpg',
                    
                },
                {
                    nombre:'El rey león',
                    duracion:'1h 58m',
                    anio: 2019,
                    sinopsis: 'Un remake del clásico animado de Disney de 1994 ‘El rey león’ que estará dirigido por Jon Favreu.',
                    genero:'Acción - Aventura - Drama',
                    img: 'imgs/reyleon.jpg',
                    
                },
                {

                    nombre:'Bohemian rhapsody: la historia de freddie mercury',
                    duracion:'2h 14m',
                    anio: 2018,
                    sinopsis: 'Bohemian Rhapsody es una rotunda y sonora celebración de Queen, de su música y de su extraordinario cantante Freddie Mercury.',
                    genero:'Biográfia - Drama - Musica',
                    img: 'imgs/bohemian.jpg',
                    
                },
                {

                    nombre:'Avengers: endgame',
                    duracion:'3h 2m',
                    anio: 2019,
                    sinopsis: 'Tras los sucesos de «Vengadores: Infinity War», los superhéroes que sobrevivieron a Thanos se reunen para poner en práctica un plan definitivo que podría acabar con el villano definitivamente.',
                    genero:'Acción - Aventura - Fantasía',
                    img: 'imgs/avengers.jpg',
                    
                },
                {

                    nombre:'Godzilla vs kong',
                    duracion:'1h 53m',
                    anio: 2021,
                    sinopsis: 'Godzilla y Kong, dos de las fuerzas más poderosas de un planeta habitado por todo tipo de aterradoras criaturas, se enfrentan en un espectacular combate que sacude los cimientos de la humanidad.',
                    genero:'Acción - Ciencia Ficción - Thriller',
                    img: 'imgs/kong.jpg',
                    
                },
                {

                    nombre:'Toy story 4',
                    duracion:'1h 30m',
                    anio: 2019,
                    sinopsis: 'Las aventuras de este dúo tan carismático les obligarán de nuevo salir al extraño y gigantesco mundo exterior, en una nueva misión imposible.',
                    genero:'Animación - Aventura - Comedia',
                    img: 'imgs/toy-story.jpg',
                    
                },
                {

                    nombre:'Alddín',
                    duracion:'2h 8m',
                    anio: 2019,
                    sinopsis: 'Aladdín conocerá al Genio, dando inicio a una aventura como nunca antes había imaginado.',
                    genero:'Aventura - Comedia - Familia',
                    img: 'imgs/aladdin.jpg',
                    
                },
                {

                    nombre:'Interstellar',
                    duracion:'2h 49m',
                    anio: 2014,
                    sinopsis: 'Un grupo de exploradores hacen uso de un agujero de gusano recientemente descubierto para superar las limitaciones de los viajes espaciales.',
                    genero:'Aventura - Ciencia Ficción',
                    img: 'imgs/interstellar.jpg',
                    
                },
                {

                    nombre:'Morbius',
                    duracion:'1h 44m',
                    anio: 2022,
                    sinopsis: 'Peligrosamente enfermo de un extraño trastorno sanguíneo, y determinado a salvar a otras personas que padecen su mismo destino, el doctor Morbius intenta una apuesta desesperada.',
                    genero:'Acción - Aventura - Terror',
                    img: 'imgs/morbius.jpg',
                    
                },
            ],
            comentarios: {
                peli:'',
                nombre: '',
                mail:'',
                puntuacion: [],
                comentario:'',
            },
            datos: [],
        }
    },
    template: ` <div>
                <h1>Movie Time</h1>
                <h2>Inicio</h2>
                <ul class="row"> 
                    <li id="pelicula" v-for="peli in peliculas">
                        <h3>{{peli.nombre | capitalize }}</h3>
                        <p v-bind:class="peli.anio >=2021  ? 'gold' : 'grey'">{{peli.anio}}</p>
                        <p>Duración: {{peli.duracion}}</p>
                        <p>Género: {{peli.genero}}</p>
                        <p>{{peli.sinopsis}}</p>
                        <img :src="peli.img" :alt="peli.nombre"/>
                        <div id="btns">
                        <a href="#" class="btn btn-dark">Ver</a>
                        <button @click="id(peli.nombre)" type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Opinar</button>
                        </div>
                    </li> 
                </ul>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Dejá tu comentario sobre "{{comentarios.peli}}"</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                              </div>
                              <div class="modal-body">
                              <form v-on:submit.prevent="guardar">
                              <div class="container">
                                <div class="row col-sm-10">
                                    <label for="nombre">Nombre:</label>
                                    <input v-model="comentarios.nombre" type="text" id="nombre" name="nombre">
                                </div>
                                <div class="row col-sm-10">
                                    <label for="mail">Mail:</label>
                                    <input v-model="comentarios.mail" type="email" id="mail" name="mail">
                                </div>
                                <div class="row col-sm-10">
                                <label>Puntación:</label>
                                <select v-model="comentarios.puntuacion" multiple size="3">
                                 <option>1</option>
                                 <option>2</option>
                                 <option>3</option>
                                 <option>4</option>
                                 <option>5</option>
                                 <option>6</option>
                                 <option>7</option>
                                 <option>8</option>
                                 <option>9</option>
                                 <option>10</option>
                                </select>
                                </div>
                                <div class="row col-sm-10">
                                    <label for="comentario">Tu comentario:</label>
                                    <textarea v-model="comentarios.comentario" name="comentario" id="comentario" cols="50" rows="3"></textarea>
                                </div>
                              </div>
                            </form>
                              </div>
                              <div class="modal-footer">
                                <button @click="guardar(comentarios)" type="submit" class="btn btn-dark">Guardar</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="mas">
                        <button type="button" class="btn btn-dark">Ver Más</button>
                        </div>
                        <footer><p>Marianela Fernandes Canosa, Diseño y Programación Web, Aplicaciones con Dispositivos Moviles.</p></footer>
                </div>`,
    methods:{
        id:function(nombre){
            this.comentarios.peli = nombre;
        },
        guardar:function(comentarios){
            if (comentarios.nombre == '' || comentarios.mail == '' || comentarios.comentario == '') {
                alert('Los campos no pueden quedar vacíos');
            }
            else {
                if (localStorage.length == 0) {
                    this.datos.push(comentarios);
                    localStorage.setItem('comentario',JSON.stringify(this.datos));
                    location.reload();
                }
                else {
                    this.comentarios = {
                        peli:'',
                        nombre: '',
                        mail:'',
                        puntuacion:[],
                        comentario:'',
                    }
                    let valores = JSON.parse(localStorage.getItem('comentario'));
                    valores.push(comentarios);
                    localStorage.setItem('comentario',JSON.stringify(valores));
                    location.reload();
                }
            }
        }
    },
});