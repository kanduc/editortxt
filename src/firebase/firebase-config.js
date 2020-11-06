import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA4QLO7He4JpPaVIL7BsmRgVxF7ek7eIs8",
    authDomain: "react-app-cursos-9fd7e.firebaseapp.com",
    databaseURL: "https://react-app-cursos-9fd7e.firebaseio.com",
    projectId: "react-app-cursos-9fd7e",
    storageBucket: "react-app-cursos-9fd7e.appspot.com",
    messagingSenderId: "947206133904",
    appId: "1:947206133904:web:4bd67de2a57d6e1f4f6015"
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