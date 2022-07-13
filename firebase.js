// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoh5sI0Y3L8k7dY5f8xsOYRzRQ75XY9fo",
  authDomain: "blog-medium-85206.firebaseapp.com",
  projectId: "blog-medium-85206",
  storageBucket: "blog-medium-85206.appspot.com",
  messagingSenderId: "427138554332",
  appId: "1:427138554332:web:8b60f8f957a9dba77f9719",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
