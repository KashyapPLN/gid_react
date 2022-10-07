import firebase from "firebase/compat/app";
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBW2ZEWEvN6X3bZE7JzRdb3fB0ZlL0Wvys",
    authDomain: "gid-otp.firebaseapp.com",
    projectId: "gid-otp",
    storageBucket: "gid-otp.appspot.com",
    messagingSenderId: "360740598089",
    appId: "1:360740598089:web:94c61d84f9d7340508aa98"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;