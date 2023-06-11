// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHksbCtcX9IocA8zS6eoYo_g0wIhDkUqc",
  authDomain: "controle-de-devedores-64b9d.firebaseapp.com",
  projectId: "controle-de-devedores-64b9d",
  storageBucket: "controle-de-devedores-64b9d.appspot.com",
  messagingSenderId: "1038398568602",
  appId: "1:1038398568602:web:f38c8ebe9c8e5bbe9b4723",
  measurementId: "G-4VSVELDMY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
