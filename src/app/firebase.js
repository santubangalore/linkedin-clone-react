import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCxctUclm_EGbYVW3vNeZzreojV_qfzrNs",
    authDomain: "linkedin-yt-a4448.firebaseapp.com",
    projectId: "linkedin-yt-a4448",
    storageBucket: "linkedin-yt-a4448.appspot.com",
    messagingSenderId: "980784651908",
    appId: "1:980784651908:web:4e7a0d553c0d61aba4acd1"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db, auth};
