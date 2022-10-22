// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByPO6GuaGUj99R39p-R1kfiMXV4gPZ9gw",
  authDomain: "breaking-news-d7681.firebaseapp.com",
  projectId: "breaking-news-d7681",
  storageBucket: "breaking-news-d7681.appspot.com",
  messagingSenderId: "937142129121",
  appId: "1:937142129121:web:d695900043100881cd02a0",
  measurementId: "G-JTLFTRVNM4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;