import Login from './pages/login.js';
import Home from './pages/home.js';
import Different from './pages/page404.js';
import { controlador } from '../controller/index.js'

const components = {
  login: Login,
  home: Home,
  different: Different
}

const vista = {
  init: () => {
    const form = document.getElementById('form-marcadores');
    console.log(form);
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();      
      const nuevomarcador = {
        id: Date.now(),
        nombre: form.nombre.value,
        descripcion: form.descripcion.value,
        URL: form.url.value
      }
      form.reset();
      controlador.agregarMarcador(nuevomarcador);

    });
  },

  representarMarcadores: ( ) => {
    let listaMarcadores = document.getElementById('lista-marcadores');
    listaMarcadores.innerHTML = ''
    console.log(controlador.obtenerMarcadores());
    // controlador.obtenerMarcadores()  
    controlador.obtenerMarcadores().forEach(marcador => {
      listaMarcadores.innerHTML += `
      <div class="well" id="marcador-${marcador.id}">
        <a target="_blank" href="${marcador.URL}"><h3>${marcador.nombre}</h3></a>
        <p>${marcador.descripcion}</p>
        <button class="btn btn-danger pull-right" id="${marcador.id}">Eliminar</button>
      </div>
      `;
    });
  }
}

export { components, vista}; 

