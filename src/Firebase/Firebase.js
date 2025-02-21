import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';  // Import Firebase Storage

const firebaseConfig = {
    apiKey: "AIzaSyB3Jq_SkPjeb9ICd34uyGgyoPhhgqJx4ZE",
    authDomain: "tzp-website.firebaseapp.com",
    projectId: "tzp-website",
    storageBucket: "tzp-website.firebasestorage.app",
    messagingSenderId: "326803755984",
    appId: "1:326803755984:web:750dd8cf9580662e669fd5"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();  // Initialize Firebase Storage

export { db, auth, storage };