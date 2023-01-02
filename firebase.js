// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from '@firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getFiretore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdUvNN8K0FCX3Qh53fDkuEDAfZ7g6EMUw",
  authDomain: "ari-mediumclone.firebaseapp.com",
  projectId: "ari-mediumclone",
  storageBucket: "ari-mediumclone.appspot.com",
  messagingSenderId: "191703812392",
  appId: "1:191703812392:web:8ec97e384f7298c2cd681d",
  measurementId: "G-H4C4W62187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }