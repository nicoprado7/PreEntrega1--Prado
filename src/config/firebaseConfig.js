// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4aAOH2EhTV3BT9c8iqt5aDXmGjCzy578",
  authDomain: "eminemshop-9d95b.firebaseapp.com",
  projectId: "eminemshop-9d95b",
  storageBucket: "eminemshop-9d95b.appspot.com",
  messagingSenderId: "355676065749",
  appId: "1:355676065749:web:ff502d6fe6f6d2168af75c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Referencia a la base de datos
export const db = getFirestore(app);


