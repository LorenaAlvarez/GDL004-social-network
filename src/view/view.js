import login from './pages/login.js';
import home from './pages/home.js';
import notFound from './pages/page404.js';
import { controlador } from '../controller/controller.js'

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
        id: Date.now(),
       // nombre: form.nombre.value,
       // descripcion: form.descripcion.value,
      // URL: form.url.value
      }
      form.reset();
      controlador.addPosts(newPost);

    });
  },

  renderPosts: () => {
    let listPosts = document.getElementById('list-posts');
    listPosts.innerHTML = ''
    controlador.getPosts().then(posts => {
      console.log(posts)
      posts.forEach(post => {
        listPosts.innerHTML += `
        <div class="well" id="post-${post.id}">
          <a target="_blank" href="${post.URL}"><h3>${post.author}</h3></a>
          <p>${post.text}</p>
          <button class="btn btn-danger pull-right" id="${post.id}">Eliminar</button>
        </div>
        `;
      });
    });
    return;

    
  }
}

export { components, vista};

