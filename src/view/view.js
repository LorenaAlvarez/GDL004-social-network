import login from './pages/login.js';
import home from './pages/home.js';
import notFound from './pages/page404.js';
import { controlador } from '../controller/controller.js'
import { displayName, uid } from '../main.js'


const components = {
  login: login,
  home: home,
  notFound: notFound
}

const vista = {
  init: () => {
    const form = document.getElementById('form-posts');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();      
      const newPost = {
        author: displayName,
        date: new Date(),
        privacity: 'public',
        text: form.text.value,
        userId: uid
      }
      form.reset();
      controlador.addPosts(newPost);

    });
  },

  renderPosts: () => {
    let listPosts = document.getElementById('list-posts');
    listPosts.innerHTML = ''
   // controlador.getPosts(['userId', '==', uid]).then(posts => {
    controlador.getPosts().then(posts => {
      console.log(posts)
      posts.forEach(post => {
        listPosts.innerHTML += `
        <div class="well" id="post-${post.id}">
        <button class="btn-update-post" id="${post.id}">Update</button>
          <a target="_blank" href="${post.URL}"><h3 class='post-author'>${post.data().author}</h3></a>
          <p class="post-area">${post.data().text}</p>
          <i class="fas fa-heart like-icon" id="${post.id}"></i>
          <textarea class="text-area" style="display: none;"></textarea>
          <button class="btn-delete-post" id="${post.id}">Delete</button>
          <button class="btn-save-post" style="display: none;" id="${post.id}">Save</button>
          <button class="btn-cancel-post" style="display: none;" id="${post.id}">Cancel</button>
        </div>
        `;
      });
      let btnsDelete = document.querySelectorAll('.btn-delete-post');
      let btnsUpdate = document.querySelectorAll('.btn-update-post');
      let postArea = document.querySelectorAll('.post-area');
      let textArea = document.querySelectorAll('.text-area');
      let btnsSave = document.querySelectorAll('.btn-save-post');
      let btnsCancel = document.querySelectorAll('.btn-cancel-post');
      let btnsLike = document.querySelectorAll('.like-icon');

      for (let i = 0; i < btnsDelete.length ; i++){
        btnsDelete[i].addEventListener('click', () => {
          let btnId = btnsDelete[i].getAttribute('id');
          controlador.deletePosts(btnId).then((response) => {
            vista.renderPosts();
          });
        })
        btnsUpdate[i].addEventListener('click', () => {
          let btnId = btnsUpdate[i].getAttribute('id');
          btnsDelete[i].style.display = 'none';
          btnsUpdate[i].style.display = 'none';
          postArea[i].style.display = 'none';
          textArea[i].style.display = 'block'; 
          btnsSave[i].style.display = 'inline-block'; 
          btnsCancel[i].style.display = 'inline-block'; 
        })
        btnsCancel[i].addEventListener('click', () => {
          btnsDelete[i].style.display = 'inline-block';
          btnsUpdate[i].style.display = 'inline-block';
          postArea[i].style.display = 'inline-block';
          textArea[i].style.display = 'none'; 
          btnsSave[i].style.display = 'none'; 
          btnsCancel[i].style.display = 'none'; 
        })
        btnsSave[i].addEventListener('click', () => {
          let btnId = btnsUpdate[i].getAttribute('id');
          controlador.updatePosts(btnId, textArea[i].value).then((resolve) => {
            vista.renderPosts();
            btnsDelete[i].style.display = 'block';
            btnsUpdate[i].style.display = 'block';
            postArea[i].style.display = 'block';
            textArea[i].style.display = 'none'; 
            btnsSave[i].style.display = 'none'; 
            btnsCancel[i].style.display = 'none'; 
          })
        })
        btnsLike[i].addEventListener('click', () => { 
          let btnId = btnsLike[i].getAttribute('id');
          controlador.toggleLike(btnId, uid).then((resolve) => {
            btnsLike[i].classList.toggle('like-icon-liked');
          })
        });
      }
    });
    return;
  }
}

export { components, vista};
