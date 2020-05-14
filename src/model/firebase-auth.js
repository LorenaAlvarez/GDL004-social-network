export const firebaseAuth = {
    firebaseLoginAuth: () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          let displayName = user.displayName;
          let email = user.email;
          let emailVerified = user.emailVerified;
          let photoURL = user.photoURL;
          let isAnonymous = user.isAnonymous;
          let uid = user.uid;
          let providerData = user.providerData;
          document.getElementById('login').innerHTML = 'logueado '+user.email;
        } else {
          document.getElementById('login').innerHTML = 'No logueado ';
        }
      });
    }
}
