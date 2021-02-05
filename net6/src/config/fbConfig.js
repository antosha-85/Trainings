import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

//Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyDfl_292ivH3E3DVykqwAED7rMD7-b9yKs",
  authDomain: "anton-plan.firebaseapp.com",
  projectId: "anton-plan",
  storageBucket: "anton-plan.appspot.com",
  messagingSenderId: "500276286187",
  appId: "1:500276286187:web:71fb4ccdd8cf461d0564ae",
  measurementId: "G-NHPL9H3Q7W",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
