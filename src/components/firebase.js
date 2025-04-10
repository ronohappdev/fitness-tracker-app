// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrI8aLW_Gb0RTkO7kxGwxxUlTn2eo8t4A",
  authDomain: "fitness-tracker-39af5.firebaseapp.com",
  projectId: "fitness-tracker-39af5",
  storageBucket: "fitness-tracker-39af5.firebasestorage.app",
  messagingSenderId: "365464545598",
  appId: "1:365464545598:web:17a23540d1efe0f4f3e46f",
  measurementId: "G-NBC99K707N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;