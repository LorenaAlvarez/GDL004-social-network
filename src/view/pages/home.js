import { signOut } from "../../controller/controller.js";

export default () => {
  const viewHome = `
  <div class="header" id="myHeader">
      <h2>Social Network</h2> 
      <span id="signOutButton" class="fas fa-sign-out-alt"> Log Out</span> 
    </div>

  <div class="homeContainer">

    <div class="profile"><img src="/images/logo.png" width="90%">
    </div>
        
    <div class="post">
      <form id="form-posts">
    <div>
      <label for="text-input">Add Post</label>
      <input name="text" type="text" id="text-input">
    </div>

    <button type="submit">Share</button>
    </form>
    </div>
        
    <div class="wall">
      <div id="list-posts"></div>
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