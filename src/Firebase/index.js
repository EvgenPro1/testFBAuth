// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCd2gHVrVhKy0RHxAKZzTcLndd9uf0fcxo",
    authDomain: "mytest-fb-auth.firebaseapp.com",
    projectId: "mytest-fb-auth",
    storageBucket: "mytest-fb-auth.appspot.com",
    messagingSenderId: "754938370096",
    appId: "1:754938370096:web:4d6254d2e47ed3236af5f5",
    measurementId: "G-QZQWG4X682"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
