import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA9fZZNsNulAuZLYa7ordshDnBWkKIED88",
    authDomain: "webchat-583d0.firebaseapp.com",
    projectId: "webchat-583d0",
    storageBucket: "webchat-583d0.appspot.com",
    messagingSenderId: "850018782111",
    appId: "1:850018782111:web:acdf1102cbc844a5ef0baa"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig);
// Export the Firestore instance
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
