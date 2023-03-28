import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC7vt5o0EOXP3aIl1AYryOI0YlDbXKpMTc",
    authDomain: "stack-clone-81b6f.firebaseapp.com",
    projectId: "stack-clone-81b6f",
    storageBucket: "stack-clone-81b6f.appspot.com",
    messagingSenderId: "486978841752",
    appId: "1:486978841752:web:2137fe0d0298094e86f4ed",
    measurementId: "G-FENJWJDPYT"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
