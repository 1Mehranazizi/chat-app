import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBGl6U-sgAn5Qhn57EyCIFzpkvQDhnJNFc",
    authDomain: "magram-c32ac.firebaseapp.com",
    projectId: "magram-c32ac",
    storageBucket: "magram-c32ac.appspot.com",
    messagingSenderId: "654350120617",
    appId: "1:654350120617:web:5d7b598600b90ef00e1bb8"
  }).auth();