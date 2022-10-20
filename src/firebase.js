// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
