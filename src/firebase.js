import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASqsqJ5WNGBk3dXJP6r5GOJz8y-Uor06M",
  authDomain: "reactauth-833e9.firebaseapp.com",
  projectId: "reactauth-833e9",
  storageBucket: "reactauth-833e9.appspot.com",
  messagingSenderId: "717270595623",
  appId: "1:717270595623:web:4cebe48e62755146143602",
};
firebase.initializeApp(firebaseConfig);
const app = firebase.app();

export const googleLogin = async () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  const user = result.user;
  // console.log(user.displayName);
  return user;
};
