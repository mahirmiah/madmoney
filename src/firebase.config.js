// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAeCpxIHmxpYoU8USQCk20vzzoWU6a_3K0",
  authDomain: "madmoney-b43e3.firebaseapp.com",
  projectId: "madmoney-b43e3",
  storageBucket: "madmoney-b43e3.appspot.com",
  messagingSenderId: "296961072336",
  appId: "1:296961072336:web:5b1813d75312b737eed2d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()