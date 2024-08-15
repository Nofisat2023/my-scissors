// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU67_zlz0j699dtYp8CjCrhez-Z4ZL8qA",
  authDomain: "scissors-1.firebaseapp.com",
  projectId: "scissors-1",
  storageBucket: "scissors-1.appspot.com",
  messagingSenderId: "960101075404",
  appId: "1:960101075404:web:542452d50b8c8ecaa5b569",
  measurementId: "G-CTVKXSDQH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };