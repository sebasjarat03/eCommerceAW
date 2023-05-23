// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGf4d6wXzuAviYY2lLTeFzSxmFB2GBQ_Q",
  authDomain: "ecommerceaw-e5902.firebaseapp.com",
  projectId: "ecommerceaw-e5902",
  storageBucket: "ecommerceaw-e5902.appspot.com",
  messagingSenderId: "259716661053",
  appId: "1:259716661053:web:4b3e4f8e53386d6aef4f54",
  measurementId: "G-RSFFSR6FMW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
