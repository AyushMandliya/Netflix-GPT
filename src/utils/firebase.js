// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT9zZ0pAqxylzUTBnV0DpNGJHnREhb6-Y",
  authDomain: "netflixgpt-57e26.firebaseapp.com",
  projectId: "netflixgpt-57e26",
  storageBucket: "netflixgpt-57e26.appspot.com",
  messagingSenderId: "875623721791",
  appId: "1:875623721791:web:c9c20b2c6379961f7e818a",
  measurementId: "G-4ME7MCV819",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
