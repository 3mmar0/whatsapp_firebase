import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB5cTKtukAqkRmnMeXr_p5v52TbPTuYbZs",
  authDomain: "whatsapp-cl-react.firebaseapp.com",
  projectId: "whatsapp-cl-react",
  storageBucket: "whatsapp-cl-react.appspot.com",
  messagingSenderId: "202490231707",
  appId: "1:202490231707:web:07cee4b99d82cae9663f3e",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
