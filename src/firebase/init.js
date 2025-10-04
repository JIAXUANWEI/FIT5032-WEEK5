// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuaHQyQ6E4IvBQxd3VjCAkoVJRtV1FqZU",
  authDomain: "week7-jiaxuanwei.firebaseapp.com",
  projectId: "week7-jiaxuanwei",
  storageBucket: "week7-jiaxuanwei.firebasestorage.app",
  messagingSenderId: "19831207995",
  appId: "1:19831207995:web:a01bb2f66940139b63c41e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db