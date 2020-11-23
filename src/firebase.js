import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEGskzv8K1WcXO5NKrYU_-JOyVwMIL2Go",
  authDomain: "slack-clone-17bc4.firebaseapp.com",
  databaseURL: "https://slack-clone-17bc4.firebaseio.com",
  projectId: "slack-clone-17bc4",
  storageBucket: "slack-clone-17bc4.appspot.com",
  messagingSenderId: "1066623178441",
  appId: "1:1066623178441:web:f02cb6d2fc21b33304df18",
  measurementId: "G-8KVNP0ZC13",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
