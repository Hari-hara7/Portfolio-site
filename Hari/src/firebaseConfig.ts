import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOmXdklhQSRhQ-p8KyUH95UFCQrmHMR_Q",
  authDomain: "hari-portfolio-3759b.firebaseapp.com",
  projectId: "hari-portfolio-3759b",
  storageBucket: "hari-portfolio-3759b.appspot.com",
  messagingSenderId: "258859166646",
  appId: "1:258859166646:web:bb7aa182e1435b3df16f17"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };






