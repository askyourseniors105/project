import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsjNhr1U7Rs3_v4Us8KQ4AsB7v037NsGQ",
  authDomain: "ask-your-seniors.firebaseapp.com",
  projectId: "ask-your-seniors",
  storageBucket: "ask-your-seniors.appspot.com",
  messagingSenderId: "290940374754",
  appId: "1:290940374754:web:60ca065bc78593df8d98bb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
