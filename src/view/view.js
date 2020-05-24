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
          <a target="_blank" href="${post.URL}"><h3 class='post-author'>${post.data().author}</h3></a>
          <p>${post.data().text}</p>
          <button class="btn-delete-post" id="${post.id}">Eliminar</button>
        </div>
        `;
      });
      let btnsDelete = document.querySelectorAll('.btn-delete-post');
      for (let i = 0; i < btnsDelete.length ; i++){
        btnsDelete[i].addEventListener('click', () => {
          let btnId = btnsDelete[i].getAttribute('id');
          controlador.deletePosts(btnId).then((response) => {
            vista.renderPosts();
          });
        })

      }
    });
    return;
  }
}

export { components, vista};

