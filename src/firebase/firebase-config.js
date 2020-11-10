import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDkyWnxUAjtMJIZU3IeJFkTcTGOhURM4Ak",
    authDomain: "editortexto-81244.firebaseapp.com",
    databaseURL: "https://editortexto-81244.firebaseio.com",
    projectId: "editortexto-81244",
    storageBucket: "editortexto-81244.appspot.com",
    messagingSenderId: "248845203380",
    appId: "1:248845203380:web:93f216452d758c325264e1",
    measurementId: "G-LKJDZ0NXJ4"
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