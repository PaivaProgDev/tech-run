// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5AHvb-AhfywibKP2rScC0Z8k6hblW1lc",
    authDomain: "tech-run-2fe89.firebaseapp.com",
    databaseURL: "https://tech-run-2fe89-default-rtdb.firebaseio.com",
    projectId: "tech-run-2fe89",
    storageBucket: "tech-run-2fe89.firebasestorage.app",
    messagingSenderId: "960860835828",
    appId: "1:960860835828:web:1ae026763bc144953d73a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)