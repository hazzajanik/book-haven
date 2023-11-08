// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_fpbizf6v9l1HsoAtRzMNuadiudH2pk",
  authDomain: "book-haven-7c8ec.firebaseapp.com",
  projectId: "book-haven-7c8ec",
  storageBucket: "book-haven-7c8ec.appspot.com",
  messagingSenderId: "442378302398",
  appId: "1:442378302398:web:a20c16d88810f41fd0bfef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;