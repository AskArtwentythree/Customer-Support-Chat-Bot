import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBJGPeM3bAnU_VgCmbZhihtvvZDQ8eNths",
  authDomain: "chatbot-73526.firebaseapp.com",
  projectId: "chatbot-73526",
  storageBucket: "chatbot-73526.appspot.com",
  messagingSenderId: "190450491468",
  appId: "1:190450491468:web:34ad9a3ae057b6009594e9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);