// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-26668.firebaseapp.com",
  projectId: "mern-estate-26668",
  storageBucket: "mern-estate-26668.appspot.com",
  messagingSenderId: "98794756479",
  appId: "1:98794756479:web:7468f250dc37aaf712a24a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);