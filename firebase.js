// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWhOy7qk75dcIrlNFzvZiNNIWP6tvTFqg",
  authDomain: "chatgpt-clone-4da84.firebaseapp.com",
  projectId: "chatgpt-clone-4da84",
  storageBucket: "chatgpt-clone-4da84.appspot.com",
  messagingSenderId: "105644853371",
  appId: "1:105644853371:web:9592fe73e2634d8751fade"
};

// Initialize Firebase
const app = getApps().length? getApp(): initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}