import { controlador } from './controller/controller.js';

let displayName = '';
let uid = '';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      displayName = user.email.split('@')[0];
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      uid = user.uid;
      let providerData = user.providerData;
      location.hash = '#/home';
      console.log(user)
      return;
    } else {
     // alert('Sin cuenta, Por Favor Registrate')
    }
  });


const init = ( ) => {
    
    controlador.changeTmp(window.location.hash);
    window.addEventListener('hashchange', () => controlador.changeTmp(window.location.hash));
} 

window.addEventListener('load', init);

export { displayName, uid};