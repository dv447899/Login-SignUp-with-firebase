
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAaoafDxSwYdvYgu5uYMlli0vhUl0fjps4",
  authDomain: "fir-01-88601.firebaseapp.com",
  projectId: "fir-01-88601",
  storageBucket: "fir-01-88601.appspot.com",
  messagingSenderId: "920696974581",
  appId: "1:920696974581:web:6ab17b773c225cfacc29bc",
  measurementId: "G-6YWF9S1HZL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth();

export{app, auth}