import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_gl43Qu-zcYPN1cnBjH57rf9OmIOUsg0",
  authDomain: "fitness-tracker-proj.firebaseapp.com",
  projectId: "fitness-tracker-proj",
  storageBucket: "fitness-tracker-proj.firebasestorage.app",
  messagingSenderId: "379606268779",
  appId: "1:379606268779:web:6e116b82574b827d1daa2e",
  measurementId: "G-BRVXYLWE40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;