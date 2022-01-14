import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyDIJ3aK1Ya_158T60Ggmx0i3qd-eFK29gw",
    authDomain: "test-fbauth.firebaseapp.com",
    projectId: "test-fbauth",
    storageBucket: "test-fbauth.appspot.com",
    messagingSenderId: "160699708538",
    appId: "1:160699708538:web:430099ff5cce1b9016b7c3",
    measurementId: "G-GB65DJNF6Q"
};



export const fire = firebase.initializeApp(firebaseConfig)


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*
// Allow read/write access to all users under any conditions
// Warning: **NEVER** use this rule set in production; it allows
// anyone to overwrite your entire database.
service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
        allow read, write: if true;
    }
}
}*/
