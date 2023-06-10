// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJZuHtahH1Ees4NopL6WmVtcCMI4ULq4A",
  authDomain: "boutique-scents.firebaseapp.com",
  projectId: "boutique-scents",
  storageBucket: "boutique-scents.appspot.com",
  messagingSenderId: "947922583571",
  appId: "1:947922583571:web:54dbf0ba7fd3896f29ffe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
