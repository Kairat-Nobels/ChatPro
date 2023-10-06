import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC6XaYudpPoUGoHDb0Tl57O6-qR4O3w1iQ",
    authDomain: "chat-faf27.firebaseapp.com",
    projectId: "chat-faf27",
    storageBucket: "chat-faf27.appspot.com",
    messagingSenderId: "45792056292",
    appId: "1:45792056292:web:81abfd9d965af2179eedf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

