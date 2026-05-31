import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaOAPDNrRdU76vFRmbaSrQSiUNy6Pgv2A",
  authDomain: "resume-builder-760fe.firebaseapp.com",
  projectId: "resume-builder-760fe",
  storageBucket: "resume-builder-760fe.firebasestorage.app",
  messagingSenderId: "161525878020",
  appId: "1:161525878020:web:50c6b659a8788064841451"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = app ? getAuth(app) : null;
export const db = app ? getFirestore(app) : null;
