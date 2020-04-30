import { login } from '../../controller/index.js';

export default () => {
  const viewHome =
`<div class="imagesContainer">  
  <div><img src="/images/1.jpg" width="90%"/><img src="/images/7.jpg" width="90%"/><img src="/images/13.jpg" width="90%"></div>
  <div><img src="/images/2.jpg" width="90%"/><img src="/images/8.jpg" width="90%"/><img src="/images/14.jpg" width="90%"></div>
  <div><img src="/images/3.jpg" width="90%"/><img src="/images/9.jpeg" width="90%"/><img src="/images/15.jpg" width="90%"></div>
  <div><img src="/images/4.jpg" width="90%"/><img src="/images/10.jpg" width="90%/"><img src="/images/16.jpg" width="90%"></div>
  <div><img src="/images/5.jpg" width="90%"/><img src="/images/11.png" width="90%"/><img src="/images/17.jpg" width="90%"></div>
  <div><img src="/images/6.jpg" width="90%"/><img src="/images/12.jpg" width="90%"/><img src="/images/18.jpg" width="90%"></div>    
</div>  

    <div class="registerContainer">
    
      <div id="divButtons">
      <div id="logotipo"><img src="/images/logo-negro.png" width="30%"></div>
      
      <p class="parrafo">Encuentra nuevas ideas para probar</p><br>
        <button id="loginButton" class="introButtons">Login</button>
        <button id="signUpButton" class="introButtons">Sign Up</button>
      </div>
      <div id="loginForm" class="modal" style="display: none;">
          <span id="closeModalLogin" class="close" title="Close Modal">&times;</span>  
          <div id="logotipo"><img src="/images/logo-negro.png" width="30%"></div>
                 
          <label for="email" class="loginLabels">Email</label>
          <input type="email" id="emailLogin" placeholder="Enter Email" name="email" required>
      
          <label for="password" class="loginLabels">Password</label>
          <input type="password" id ="passwordLogin"placeholder="Enter Password" name="password" required>
          <div id="errorMessageLogin"></div>  
      
          <button id="submitLogin" class="registerSubmit">Login</button>
          <p class="parrafo">Forgot your password?</p>  
      </div>
      <div id="signUpForm" class="modal" style="display: none;">
        <span id="closeModalSignUp" class="close" title="Close Modal">&times;</span>     
        <div id="logotipo"><img src="/images/logo-negro.png" width="30%"></div>
               
        <label for="username" class="loginLabels">Username*</label>
        <input type="text" placeholder="Enter Username" name="username" required>
      
        <label for="email" class="loginLabels">Email*</label>
        <input id="signUpEmail" type="email" placeholder="Enter Email" name="email" required>
      
        <label for="password" class="loginLabels"> Password*</label>
        <input id="signUpPass" type="password" placeholder="Enter Password" name="password" required>
        <div id="errorMessageSignUp"></div> 
        <button id="signUpSubmit"class="registerSubmit">Sign Up</button>
        <p class="parrafo">Or</p>
        <button id="facebookSignUp">Sign up with Facebook</button>
        <button id="googleSignUp">Sign up with Google</button>
        
    </div>`;


    
    const divElemt = document.createElement('div');
    divElemt.classList.add('divElemt')
    divElemt.innerHTML = viewHome;

    const loginButton = divElemt.querySelector('#loginButton');
    const signUpButton = divElemt.querySelector('#signUpButton');
    const closeModalLogin = divElemt.querySelector('#closeModalLogin');
    const closeModalSignUp = divElemt.querySelector('#closeModalSignUp');

    closeModalLogin.addEventListener('click', () => {
      const loginForm = document.querySelector('#loginForm');
      const divButtons = document.querySelector('#divButtons');
  
      loginForm.style.display = 'none';
      divButtons.style.display = 'block';    
    });

    closeModalSignUp.addEventListener('click', () => {
      const signUpForm = document.querySelector('#signUpForm');
      const divButtons = document.querySelector('#divButtons');
  
      signUpForm.style.display = 'none';
      divButtons.style.display = 'block';    
  
    });

    loginButton.addEventListener('click', () => {
      const loginForm = document.querySelector('#loginForm');
      const divButtons = document.querySelector('#divButtons');
  
      loginForm.style.display = 'block';
      divButtons.style.display = 'none';
    });
  
    signUpButton.addEventListener('click', () => {
      const signUpForm = document.querySelector('#signUpForm');
      const divButtons = document.querySelector('#divButtons')
  
      signUpForm.style.display = 'block';
      divButtons.style.display = 'none';
    }); 
    
    const submitLogin = divElemt.querySelector('#submitLogin');
    console.log(login)
    submitLogin.addEventListener('click', login);

  /* const submitSignUp = divElemt.querySelector("#signUpSubmit");
  submitSignUp.addEventListener("click", signUp);


  const facebookSignUp = divElemt.querySelector("#facebookSignUp");
  facebookSignUp.addEventListener("click", signUpFacebook);

  const googleSignUp = divElemt.querySelector("#googleSignUp");
  googleSignUp.addEventListener("click", signUpGoogle); */

  return divElemt;
}; 
