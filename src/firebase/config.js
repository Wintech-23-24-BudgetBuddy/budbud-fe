// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, Timestamp } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKPZAJqK40nJXVAaRab2aYF9h5exRLifk",
  authDomain: "budgetbuddy-75f91.firebaseapp.com",
  projectId: "budgetbuddy-75f91",
  storageBucket: "budgetbuddy-75f91.appspot.com",
  messagingSenderId: "517927323281",
  appId: "1:517927323281:web:fd93698da820ee2f61e130",
  measurementId: "G-BLBHYWKQN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const projectFirestore = getFirestore();
const projectAuth = getAuth();
const timestamp = Timestamp


export { app, analytics, projectAuth, projectFirestore, timestamp };