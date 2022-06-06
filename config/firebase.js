import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrHlUBB6jP4vg_QuxZrioVFUW5hdy8UhY",
  authDomain: "react-native-app-46dae.firebaseapp.com",
  projectId: "react-native-app-46dae",
  storageBucket: "react-native-app-46dae.appspot.com",
  messagingSenderId: "588745985201",
  appId: "1:588745985201:web:cd478f37b1275aba266690",
  measurementId: "G-EYP1FE6XLZ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
