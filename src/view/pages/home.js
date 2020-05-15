import { signOut } from "../../controller/index.js";

export default () => {
  const viewHome = `
  <div class="header" id="myHeader">
      <h2>My Header</h2> 
      <span class="fas fa-sign-out-alt"></span> <button id="signOutButton">Sign Out</button> 
    </div>

  <div class="homeContainer">

    <div class="profile"><img src="/images/logo.png" width="60%">
      <h6 id="name">Name</h6>
    </div>
        
    <div class="post">
      <form id="form-marcadores">
    <div>
      <label for="nombre-input">Nombre</label>
      <input name="nombre" type="text" id="nombre-input"/>
    </div>
      
    <div>
      <label for="descripcion-input">Descripcion</label>
      <input name="descripcion" type="text" id="descripcion-input">
    </div>

    <div>
      <label for="url-input">URLs</label>
      <input name="url" type="text" id="url-input">
    </div>
      <button type="submit">Añadir</button>
    </form>
  </div>
        
    <div class="wall">
      <div id="lista-marcadores"></div>
    </div>
  </div>
  `

  
  const divElemt = document.createElement('div');
  divElemt.classList.add('divElemt')
  divElemt.innerHTML = viewHome;

  const submitSignOut = divElemt.querySelector("#signOutButton");
  submitSignOut.addEventListener("click", signOut);




  return divElemt;
};