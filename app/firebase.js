// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Firestore, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8eaVgCsrog1CMufSeIHkJ072mVafsD2A",
  authDomain: "inventory-management-pro-2695a.firebaseapp.com",
  projectId: "inventory-management-pro-2695a",
  storageBucket: "inventory-management-pro-2695a.appspot.com",
  messagingSenderId: "449635273625",
  appId: "1:449635273625:web:3de68be8b7a57132e8a108",
  measurementId: "G-TEVHBMGVEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {Firestore}
