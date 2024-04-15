import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8zmJaYYhHYag-3Tza6FRo2ABlUVN68AM",
  authDomain: 'steet-fighter-react.firebaseapp.com',
  projectId: 'steet-fighter-react',
  storageBucket: 'steet-fighter-react.appspot.com',
  messagingSenderId: '38474217056',
  appId: '1:38474217056:web:0e5efd51b663862464f505'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
