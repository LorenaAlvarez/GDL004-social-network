export const modelo = {
  posts: [],
  addPosts: (newPost) => {
  return modelo.posts.push(newPost)
  },
  getPosts: () => {
    let collection = [];
    return new Promise((resolve, reject) => {
      db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          collection.push(doc.data())
        });
        // console.log(collection)
        resolve(collection); 
      })
    })
  },
  deletePosts: () => {

  },
  editPosts: () => {

  } 

}


