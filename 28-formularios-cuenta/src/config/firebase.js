import firebase from 'firebase';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCtfwOujNZgltxx0psupfHzEZRKRbVCllM",
    authDomain: "formularios-once.firebaseapp.com",
    databaseURL: "https://formularios-once.firebaseio.com",
    projectId: "formularios-once",
    storageBucket: "formularios-once.appspot.com",
    messagingSenderId: "619454915166",
    appId: "1:619454915166:web:9dc28afb367c6efd9f8acf"
});


const db = firebase.firestore();

//export const auth = firebase.auth();

export default db;