import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {apiKey} from './API';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: 'maximal-murdle-38518.firebaseapp.com',
  projectId: 'maximal-murdle-38518',
  storageBucket: 'maximal-murdle-38518.appspot.com',
  messagingSenderId: '1042068547395',
  appId: '1:1042068547395:web:e99ec8ac32dae431b831f6',
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
