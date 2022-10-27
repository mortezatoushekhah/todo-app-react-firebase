// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7nVCPiykgxCP3rmfc7X5tWvGlfm4byog",
  authDomain: "todo-app-react-firebase-50687.firebaseapp.com",
  projectId: "todo-app-react-firebase-50687",
  storageBucket: "todo-app-react-firebase-50687.appspot.com",
  messagingSenderId: "858887596770",
  appId: "1:858887596770:web:64bd32b92392874776ccbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)