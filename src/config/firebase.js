// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain: "linkedin-clone-8b13a.firebaseapp.com",
  projectId: "linkedin-clone-8b13a",
  storageBucket: "linkedin-clone-8b13a.appspot.com",
  messagingSenderId: "50715946998",
  appId: import.meta.env.VITE_APP_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };