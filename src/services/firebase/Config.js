import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyA_fneu-6nUSXdP0vKcw5Q9U-zYhMqqD-c",
  authDomain: "coronatrackrn.firebaseapp.com",
  databaseURL: "https://coronatrackrn.firebaseio.com",
  projectId: "coronatrackrn",
  storageBucket: "coronatrackrn.appspot.com",
  messagingSenderId: "438503559606",
  appId: "1:438503559606:web:7e7484b3668459dac4b117",
  measurementId: "G-XTT70PZ3FE"
}

// Initialize Firebase
firebase.initializeApp(config);

 const firestore = firebase.firestore;
 const auth = firebase.auth;

export {firebase,firestore,auth};
