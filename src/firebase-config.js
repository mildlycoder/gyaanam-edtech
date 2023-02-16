import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "gyaanam-b7504.firebaseapp.com",
    projectId: "gyaanam-b7504",
    storageBucket: "gyaanam-b7504.appspot.com",
    messagingSenderId: "339677377368",
    appId: "1:339677377368:web:e4a5694bbfb67438f0eb2d",
    measurementId: "G-Q1CS9Z1483"
  };


const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)