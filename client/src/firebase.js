// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bb5be.firebaseapp.com",
  projectId: "mern-blog-bb5be",
  storageBucket: "mern-blog-bb5be.appspot.com",
  messagingSenderId: "74415730654",
  appId: "1:74415730654:web:fe1222d8ba332bf085774f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
