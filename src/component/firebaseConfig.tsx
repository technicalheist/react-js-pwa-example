// import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import "firebase/firestore";
const config = {
    apiKey: "AIzaSyDdzT4nKugAkHrqXEMbkqNOz8CMUu2mf_c",
    authDomain: "auth.technicalheist.com",
    databaseURL: "https://my-first-project-eb9c5.firebaseio.com",
    projectId: "my-first-project-eb9c5",
    storageBucket: "my-first-project-eb9c5.appspot.com",
    messagingSenderId: "171865625679",
    appId: "1:171865625679:web:ed987997df37767f3ec63a"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
