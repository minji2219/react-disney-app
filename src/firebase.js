// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVtMnkf6GVaRdP4XbNylKEad5wY-sn62I",
  authDomain: "react-disney-plus-app-bc9b8.firebaseapp.com",
  projectId: "react-disney-plus-app-bc9b8",
  storageBucket: "react-disney-plus-app-bc9b8.appspot.com",
  messagingSenderId: "195558254359",
  appId: "1:195558254359:web:74876dc0381bbabf457952",
  measurementId: "G-BCG5SB7001"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;