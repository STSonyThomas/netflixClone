import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTIlaFd-Lh7wwjNzdmCE6_BXQc7-YpNBk",
    authDomain: "netflix-clone-c3ffa.firebaseapp.com",
    projectId: "netflix-clone-c3ffa",
    storageBucket: "netflix-clone-c3ffa.appspot.com",
    messagingSenderId: "1062986788955",
    appId: "1:1062986788955:web:f4d807e879fdc1a308cf7e",
    measurementId: "G-1V9L53PMNR"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;