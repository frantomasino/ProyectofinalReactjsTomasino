// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM8QXWKP0OpuToEWE-ZHcC8bpRh9SgCmk",
  authDomain: "ecommerce-reactjs-350aa.firebaseapp.com",
  projectId: "ecommerce-reactjs-350aa",
  storageBucket: "ecommerce-reactjs-350aa.appspot.com",
  messagingSenderId: "904207875955",
  appId: "1:904207875955:web:8c4088dfadb0fb83910f06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
