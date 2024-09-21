import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnU5PqtAH98t1oB63LyjRxVpyKHkcm9XA",
    authDomain: "fusionmart-bc2e6.firebaseapp.com",
    projectId: "fusionmart-bc2e6",
    storageBucket: "fusionmart-bc2e6.appspot.com",
    messagingSenderId: "472713503548",
    appId: "1:472713503548:web:59cb2b77f56477ce09b439"
  };

  const app=initializeApp(firebaseConfig)
  const fireDB=getFirestore(app)
  const auth=getAuth(app)

  
  export {fireDB,auth}