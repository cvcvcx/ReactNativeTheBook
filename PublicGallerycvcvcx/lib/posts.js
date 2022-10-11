import firestore, {firebase} from '@react-native-firebase/firestore';
const db = firebase.firestore();
const postsCollection = db.collection('posts');
const likePostCollection = db.collection('likePost');
export function createPost({user, photoURL, description}) {
  return postsCollection.add({
    user,
    photoURL,
    description,
    createdAt: firestore.FieldValue.serverTimestamp(),
    likedUser: [],
  });
}

export const PAGE_SIZE = 12;

export async function getPosts({userId, mode, id} = {}) {
  let query = postsCollection.orderBy('createdAt', 'desc').limit(PAGE_SIZE);
  if (userId) {
    query = query.where('user.id', '==', userId);
  }
  if (id) {
    const cursorDoc = await postsCollection.doc(id).get();
    query =
      mode === 'older'
        ? query.startAfter(cursorDoc)
        : query.endBefore(cursorDoc);
  }
  const snapshot = await query.get();
  const posts = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}
export async function getOlderPosts(id, userId) {
  return getPosts({id, mode: 'older', userId});
}
export async function getNewerPosts(id, userId) {
  return getPosts({id, mode: 'newer', userId});
}

export async function removePost(id) {
  return postsCollection.doc(id).delete();
}

export async function updatePost({id, description}) {
  //update
  return postsCollection.doc(id).update({
    description,
  });
}
export async function likedPost({id, displayName}) {
  console.log(displayName);
  console.log(id);

  const likedPostvar = await postsCollection.doc(id).update({
    likedUser: firestore.FieldValue.arrayUnion(displayName),
  });
  return likedPostvar;
}
export async function UnlikedPost({id, displayName}) {
  console.log(displayName);
  console.log(id);

  const UnlikedPost = await postsCollection.doc(id).update({
    likedUser: firestore.FieldValue.arrayRemove(displayName),
  });
  return UnlikedPost;
}
