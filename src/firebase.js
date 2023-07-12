import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "auth-80595.firebaseapp.com",
  projectId: "auth-80595",
  storageBucket: "auth-80595.appspot.com",
  messagingSenderId: "1009936289764",
  appId: "1:1009936289764:web:612ed65b9fe52cf0d301f1"
};

const app = initializeApp(firebaseConfig);