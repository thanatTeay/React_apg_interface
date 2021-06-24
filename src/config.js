import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyCO6BpMApQvqzEGUpBUmwJPR3rwGsPG3Jw",
    authDomain: "apg-interface.firebaseapp.com",
    projectId: "apg-interface",
    storageBucket: "apg-interface.appspot.com",
    messagingSenderId: "1068638183389",
    appId: "1:1068638183389:web:55e4fa3d6319b4766d6034",
    measurementId: "G-QYXLE81GN1"
});

export default firebaseConfig;