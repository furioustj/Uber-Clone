// lib/firebase.js

// Firebase core
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRihJnjIeGfIu9G1mCBAhrMIX0azV_v8U",
  authDomain: "uber-clone-962a2.firebaseapp.com",
  projectId: "uber-clone-962a2",
  storageBucket: "uber-clone-962a2.firebasestorage.app",
  messagingSenderId: "726941829343",
  appId: "1:726941829343:web:d0411d87e98ab36885c16a",
  measurementId: "G-KDRC3S5VHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize services
const auth = getAuth(app);
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// ✅ Export for use in app
export { auth, app, analytics, db };