import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDx1hqMwAKxJaPx3HpFE0p1I3RSM3-Ujvk",
    authDomain: "chat-a513c.firebaseapp.com",
    projectId: "chat-a513c",
    storageBucket: "chat-a513c.appspot.com",
    messagingSenderId: "189529625141",
    appId: "1:189529625141:web:6626484932c4a8e567577c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

