import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDPsR_4a76wKKYUjvzjPCdxtuCEKNTeOyA",
    authDomain: "nwitter-f1d2d.firebaseapp.com",
    projectId: "nwitter-f1d2d",
    storageBucket: "nwitter-f1d2d.appspot.com",
    messagingSenderId: "1040771929742",
    appId: "1:1040771929742:web:3725a86a8380e370581bdf"
  }; 

  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();

  export const dbService = firebase.firestore();
  export const storageService = firebase.storage();
