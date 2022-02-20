import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCUDuKBzpZmqtYPfqdrDSDxJX59Ubo8t_I",
    authDomain: "twitter-clone-fa254.firebaseapp.com",
    projectId: "twitter-clone-fa254",
    storageBucket: "twitter-clone-fa254.appspot.com",
    messagingSenderId: "201794256887",
    appId: "1:201794256887:web:a16f45a869d029398178f2"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };