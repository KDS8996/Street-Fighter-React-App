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
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebaseApp.auth(); // Export the authentication service
export default firebaseApp; // Optionally export the Firebase app instance
