import { modelo } from '../model/index.js'
import { components, vista} from '../view/index.js';

export const controlador = {
  init: () => {
    vista.init()
  },

  agregarMarcador: (nuevomarcador) => {
    modelo.agregaMarcador(nuevomarcador) 
    vista.representarMarcadores(); 
  }, 

  obtenerMarcadores:() => {
    return modelo.obtenerMarcadores();
  },

  changeTmp: (hash) => {
    // const id = hash.split('/')[1];
    const sectionMain = document.getElementById('container');
    sectionMain.innerHTML = '';

    switch (hash) {
        case '':
        case '#':
        case '#/':
            return sectionMain.appendChild(components.login());
        case '#/home':
            sectionMain.appendChild(components.home())
            controlador.init()
        // case '#/accesorios':
        // case '#/lugares':
            // { return sectionMain.appendChild(components[id]()); }
            break;
        default:
            return sectionMain.appendChild(components.different())
    }
  }
}

export const login = () => { 
    controlador.changeTmp("#/home");
    console.log("entro");
    
}
