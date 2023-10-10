import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAPZu_ypGAY5MX-A-2Zv6XGbfqcoZWpkjc",
    // authDomain: "new-chat-250c7.firebaseapp.com",
    // projectId: "new-chat-250c7",
    // storageBucket: "new-chat-250c7.appspot.com",
    // messagingSenderId: "256141390609",
    // appId: "1:256141390609:web:34a7be992873c41ba892b0",
    // measurementId: "G-MN8B6XGD7H"
    // apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "chat-ab746.firebaseapp.com",
    projectId: "chat-ab746",
    storageBucket: "chat-ab746.appspot.com",
    messagingSenderId: "901216368405",
    appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

