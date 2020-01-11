import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
