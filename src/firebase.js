import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2DzHoaLCBapdnURJGAfXWWV3tyH_F8VQ",
  authDomain: "website-ksenija-25.firebaseapp.com",
  projectId: "website-ksenija-25",
  storageBucket: "website-ksenija-25.firebasestorage.app",
  messagingSenderId: "209752691676",
  appId: "1:209752691676:web:a99c3dee6dacb674fdf519",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);

