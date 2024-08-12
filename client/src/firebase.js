// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "primecare-b93bb.firebaseapp.com",
  projectId: "primecare-b93bb",
  storageBucket: "primecare-b93bb.appspot.com",
  messagingSenderId: "914595593299",
  appId: "1:914595593299:web:ac00dde82a3b573ebedaa6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);