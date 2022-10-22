// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBq99abOyeKSTL3P-GUHJe72jx3RR88gS4",
  authDomain: "cryptoo-bros.firebaseapp.com",
  projectId: "cryptoo-bros",
  storageBucket: "cryptoo-bros.appspot.com",
  messagingSenderId: "1030176149799",
  appId: "1:1030176149799:web:1a12d5cbe7b332ddff1902",
  measurementId: "G-26RGS9PEGG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };

// auth
export const auth = getAuth();

export const provider = new GoogleAuthProvider();

export const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User Logged Out");
    })
    .catch((err) => {
      alert(err.message);
    });
};
