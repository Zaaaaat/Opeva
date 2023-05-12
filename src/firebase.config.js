import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBA4YzvGOleR7S11DDwq9Zly5Crg9b8kI0",
    authDomain: "opeva-a1eb6.firebaseapp.com",
    databaseURL: "https://opeva-a1eb6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "opeva-a1eb6",
    storageBucket: "opeva-a1eb6.appspot.com",
    messagingSenderId: "896121588907",
    appId: "1:896121588907:web:8c27c6883375ce0e58fbee"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
