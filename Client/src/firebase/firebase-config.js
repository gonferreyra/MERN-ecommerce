import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1CbeWKGBhdgDQO3Wu6hVbLfvpgvH-IGQ",
    authDomain: "react-ecommerce-nucba.firebaseapp.com",
    projectId: "react-ecommerce-nucba",
    storageBucket: "react-ecommerce-nucba.appspot.com",
    messagingSenderId: "110140774219",
    appId: "1:110140774219:web:cc95c2dc77c8edd5e1face"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(appFirebase);
export const auth = getAuth(appFirebase);
export const provider = new GoogleAuthProvider();

// const googleAuthProvider = new GoogleAuthProvider();


