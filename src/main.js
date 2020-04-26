import { controlador } from './controller/index.js';
const init = ( ) => {
    
    // window.addEventListener('hashchange', )
    controlador.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controlador.changeTmp(window.location.hash));
} 

window.addEventListener('load', init);