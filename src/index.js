import { intializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged  } from 'firebase/auth';


const firebaseApp = intializeApp({
    apiKey: "AIzaSyCyVMP4fKJbRcLnrTr_XKIIhvEUPccMEXY",
  authDomain: "asky-806ca.firebaseapp.com",
  projectId: "asky-806ca",
  storageBucket: "asky-806ca.appspot.com",
  messagingSenderId: "271135690127",
  appId: "1:271135690127:web:7f45aa65c6ac8046adcffa",
  measurementId: "G-VNMGV2DFKT"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Detect auth state


onAuthStateChanged( auth, user => {
    if(user != null){
        console.log('logged in!');

    }else{
        console.log('No User');
    }
});