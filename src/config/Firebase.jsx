// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm4K27oYD_NeeMNBDdA_IlHjW37vImi2o",
  authDomain: "learning-ms-eab96.firebaseapp.com",
  projectId: "learning-ms-eab96",
  storageBucket: "learning-ms-eab96.appspot.com",
  messagingSenderId: "39704135053",
  appId: "1:39704135053:web:a6c5fc99fbfeee3c4de9c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export  { auth , database}