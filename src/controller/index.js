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

  obtenerMarcadores: () => {
    return modelo.obtenerMarcadores();
  },

  changeTmp: (hash) => {
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
            break;
        default:
            return sectionMain.appendChild(components.notFound())
    }
  }
}

export const signUp = () => {    
  let email = document.getElementById("signUpEmail").value;
  let pass = document.getElementById("signUpPass").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
    const errorMessageSignUp = document.getElementById("errorMessageSignUp");
    let errorMessage = error.message;
    errorMessageSignUp.innerHTML = errorMessage;
    
  });
}

  export const login = () => {  
    let inputEmail = document.getElementById("emailLogin").value;      
    let inputPass = document.getElementById("passwordLogin").value;
    firebase.auth().signInWithEmailAndPassword(inputEmail, inputPass).then(function(user) {
      location.hash = '#/home';
      //controlador.changeTmp("#/home");
    })
    .catch(function(error) {
      const errorMessageLogin = document.getElementById("errorMessageLogin");
      errorMessageLogin.innerHTML = "Invalid email or password";
    });
    }

    export const signOut = () => { 
      firebase.auth().signOut().then(function(){
        location.hash = '#/';
        //controlador.changeTmp("#");
      })
      .catch(function(error){
        alert(error);
      })
    }

    
export const signUpGoogle = () => {
  const providerGoogle = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(providerGoogle);
}
export const signUpFacebook = () => {
  const providerFacebook = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(providerFacebook);
}

