import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyAMrkbz_pV5iq7QsKe09pUwbrqg8XaSz5k",
    authDomain: "editordiplo-881c0.firebaseapp.com",
    databaseURL: "https://editordiplo-881c0.firebaseio.com",
    projectId: "editordiplo-881c0",
    storageBucket: "editordiplo-881c0.appspot.com",
    messagingSenderId: "954014973377",
    appId: "1:954014973377:web:3343c338e90d02b951c340",
    measurementId: "G-Y7B749833E"
=======
    apiKey: "AIzaSyA_uM8JDnlapGBYa4seUHUBAGwhPmgxVOM",
    authDomain: "editortexto-5b528.firebaseapp.com",
    databaseURL: "https://editortexto-5b528.firebaseio.com",
    projectId: "editortexto-5b528",
    storageBucket: "editortexto-5b528.appspot.com",
    messagingSenderId: "691960905229",
    appId: "1:691960905229:web:4196c370012846d9ce1f44",
    measurementId: "G-4WDKFVHRVE"
>>>>>>> 6f11b812592df9b9cf8a0b0fab98da21c86a666f
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore(); //referencia a la bd de firebase

  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
  const twitterAuthProvider=new firebase.auth.TwitterAuthProvider();
  const facebookAuthProvider=new firebase.auth.FacebookAuthProvider();

  export{
      db,
      googleAuthProvider,
      twitterAuthProvider,
      facebookAuthProvider,
      firebase,
  }