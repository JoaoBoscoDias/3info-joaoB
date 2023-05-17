// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOHn9Kbymovjne-VvLML55cErBlrDPzLQ",
  authDomain: "info-joaob.firebaseapp.com",
  projectId: "info-joaob",
  storageBucket: "info-joaob.appspot.com",
  messagingSenderId: "340425035328",
  appId: "1:340425035328:web:486488c20b8c3dcc57d9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);