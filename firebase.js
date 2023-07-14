import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider , FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5O_AncOV4a5c9LC9QTNySv_uQzfwskJg",
    authDomain: "auth--clo.firebaseapp.com",
    projectId: "auth--clo",
    storageBucket: "auth--clo.appspot.com",
    messagingSenderId: "689243884688",
    appId: "1:689243884688:web:14ff19be216a61e1479c15"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider()
export { auth, provider , provider2 };
