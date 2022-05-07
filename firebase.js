import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {apiKey} from './API';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'making-a-murdle.firebaseapp.com',
  databaseURL: 'https://making-a-murdle-default-rtdb.firebaseio.com',
  projectId: 'making-a-murdle',
  storageBucket: 'making-a-murdle.appspot.com',
  messagingSenderId: '1000912625283',
  appId: '1:1000912625283:web:d7b71d58fb7adb7d3d85b6',
  measurementId: 'G-5X4JRH6F78',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// console.log('app:', app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

// console.log('auth:', auth);
// console.log('db:', db);

export {auth, db};
