// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyASdTyctqHc_w0Ey5tAPSCuZpvH4YYc78U",
    authDomain: "words-n-pages.firebaseapp.com",
    projectId: "words-n-pages",
    storageBucket: "words-n-pages.appspot.com",
    messagingSenderId: "378251915065",
    appId: "1:378251915065:web:1f01b004fb670ef6d882e8",
    measurementId: "G-V5SFJVDQ42"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };