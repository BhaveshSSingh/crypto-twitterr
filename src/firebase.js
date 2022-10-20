// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGL9aOCN7Uv-JRlAWToEIBcmmwKPpa4WE",
  authDomain: "crypto-twt.firebaseapp.com",
  projectId: "crypto-twt",
  storageBucket: "crypto-twt.appspot.com",
  messagingSenderId: "383242689960",
  appId: "1:383242689960:web:9bcb7f51f39501b24ed19d",
  measurementId: "G-T26P62F26L",
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
