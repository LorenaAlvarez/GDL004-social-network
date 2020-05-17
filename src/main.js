import { controlador } from './controller/index.js';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      let displayName = user.displayName;
      let email = user.email;
      let emailVerified = user.emailVerified;
      let photoURL = user.photoURL;
      let isAnonymous = user.isAnonymous;
      let uid = user.uid;
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