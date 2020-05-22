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
        author: 'Lorena',
        date: '',
        privacity: 'public',
        text: form.text.value,
        userId: 123456
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
          <a target="_blank" href="${post.URL}"><h3>${post.data().author}</h3></a>
          <p>${post.data().text}</p>
          <button class="btn-delete-post" id="${post.id}">Eliminar</button>
        </div>
        `;
      });
      let btnsDelete = document.querySelectorAll('.btn-delete-post');
      for (let i = 0; i < btnsDelete.length ; i++){
        btnsDelete[i].addEventListener('click', () => {
          let btnId = btnsDelete[i].getAttribute('id');
          controlador.deletePosts(btnId);
        })

      }
    });
    return;
  }
}

export { components, vista};

