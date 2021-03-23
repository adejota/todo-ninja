import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAYWQcbjGkDfQDNCzphr7b4qpjIcQHEZjA",
    authDomain: "todo-ninja-53432.firebaseapp.com",
    projectId: "todo-ninja-53432",
    storageBucket: "todo-ninja-53432.appspot.com",
    messagingSenderId: "754723522435",
    appId: "1:754723522435:web:4d5dad30170235db5b98b6",
    measurementId: "G-VBTE1TCFX5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true });

export default db;
