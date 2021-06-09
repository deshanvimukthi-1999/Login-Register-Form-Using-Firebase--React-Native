// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBQ8u5D4DhVqWDE1PjzJmiqarxbMib3MEY",
    authDomain: "react-native-yt-39d31.firebaseapp.com",
    projectId: "react-native-yt-39d31",
    storageBucket: "react-native-yt-39d31.appspot.com",
    messagingSenderId: "137502867689",
    appId: "1:137502867689:web:5c82413bd414f13e133078",
    measurementId: "G-BM8ZPL8NXQ"
  };
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db, auth};