export const modelo = {

  addPosts: (newPost) => {
    db.collection('posts').add(newPost)
  },
  getPosts: (condition) => {
    let collection = [];
    if (condition) { 
      console.log(condition);
      return new Promise((resolve, reject) => {
        db.collection('posts').where(condition[0], condition[1], condition[2]).orderBy('date', 'desc').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            collection.push(doc)
          });
          resolve(collection); 
        })
      })
    } else {
      return new Promise((resolve, reject) => {
        db.collection('posts').orderBy('date', 'desc').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            collection.push(doc)
          });
          // console.log(collection)
          resolve(collection); 
        })
      })
    }
  },

  deletePosts: (id) => {
    return db.collection('posts').doc(id).delete();
  },

  updatePosts: (id, text) => {
    return db.collection('posts').doc(id).update({
      text: text,
    });
  },
  
  // likes
  toggleLike: (postId, userId) => {
    return db.collection('posts-likes').add({
      postId: postId,
      userId: userId
    })
  }
}


