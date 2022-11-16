// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmNsGZitW6Ap_PSo2423o_v4AdtZM-EMo",
  authDomain: "gadget-frek-online-service.firebaseapp.com",
  projectId: "gadget-frek-online-service",
  storageBucket: "gadget-frek-online-service.appspot.com",
  messagingSenderId: "387473754179",
  appId: "1:387473754179:web:e69110d058f4434236acf6",
  measurementId: "G-22KDPY01X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;