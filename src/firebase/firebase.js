import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdCVnh7a9gYpDv8J_lCa9WFLMHwYPLAI0",
    authDomain: "netflix-clone-fs.firebaseapp.com",
    projectId: "netflix-clone-fs",
    storageBucket: "netflix-clone-fs.appspot.com",
    messagingSenderId: "591674515034",
    appId: "1:591674515034:web:c2c9058571bd7bd59cc263",
    measurementId: "G-J1V5Q5X09Z"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // subscription use.
const auth = firebase.auth();

export { auth }  // multipl explicit.
export default db; // only one