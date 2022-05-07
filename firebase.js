// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDNF3wZkA9d3RQz9RiT3K_xpvwRIZvTTrM',
  authDomain: 'maximal-murdle-38518.firebaseapp.com',
  projectId: 'maximal-murdle-38518',
  storageBucket: 'maximal-murdle-38518.appspot.com',
  messagingSenderId: '1042068547395',
  appId: '1:1042068547395:web:e99ec8ac32dae431b831f6',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export default auth;
