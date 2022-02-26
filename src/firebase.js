import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp5e8AGaVOhLJQysYBduDdndWa2ekrquM",
  authDomain: "discord-dz.firebaseapp.com",
  projectId: "discord-dz",
  storageBucket: "discord-dz.appspot.com",
  messagingSenderId: "665215399873",
  appId: "1:665215399873:web:a053d38cb1f625b3a9e140",
  measurementId: "G-V1CTD61PTD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db 