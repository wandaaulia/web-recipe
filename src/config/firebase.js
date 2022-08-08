// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "food-app-6de2d.firebaseapp.com",
  projectId: "food-app-6de2d",
  storageBucket: "food-app-6de2d.appspot.com",
  messagingSenderId: "374601347398",
  appId: "1:374601347398:web:af5ba57b30d1debc277547"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export { auth };