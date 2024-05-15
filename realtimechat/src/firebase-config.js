import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';   


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkdtkJv2ZDdYC44EWAf20E-fSJLfze8WU",
  authDomain: "realtimechat-99f4f.firebaseapp.com",
  projectId: "realtimechat-99f4f",
  storageBucket: "realtimechat-99f4f.appspot.com",
  messagingSenderId: "1037411890423",
  appId: "1:1037411890423:web:cea864390ffe9b84c50ff2",
  measurementId: "G-FWPK66XJCZ"
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = firebase.auth();
const firestore = firebase.firestore();