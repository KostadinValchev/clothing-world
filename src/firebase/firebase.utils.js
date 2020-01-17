import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAFzv15nyPyhjyCRJlk1ZrXzPOHTwhuE4w",
  authDomain: "clothing-world-b2f5a.firebaseapp.com",
  databaseURL: "https://clothing-world-b2f5a.firebaseio.com",
  projectId: "clothing-world-b2f5a",
  storageBucket: "clothing-world-b2f5a.appspot.com",
  messagingSenderId: "333100644014",
  appId: "1:333100644014:web:6cce2ea9da37161beb5f3f",
  measurementId: "G-F37WXDXT7M"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
