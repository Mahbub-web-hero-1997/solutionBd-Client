// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpHHMSG_rFF8uxxUPb9blN-v7iX4f-_so",
  authDomain: "solutionbd-95716.firebaseapp.com",
  projectId: "solutionbd-95716",
  storageBucket: "solutionbd-95716.appspot.com",
  messagingSenderId: "174410799675",
  appId: "1:174410799675:web:48e5673d7139272faf1a1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;