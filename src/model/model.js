export const modelo = {
  posts: [],
  addPosts: (newPost) => {
    db.collection('posts').add(newPost)
  },
  getPosts: () => {
    let collection = [];
    return new Promise((resolve, reject) => {
      db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          collection.push(doc)
        });
        // console.log(collection)
        resolve(collection); 
      })
    })
  },
  deletePosts: (id) => {
    db.collection('posts').doc(id).delete();
  },
  editPosts: () => {

  } 

}


