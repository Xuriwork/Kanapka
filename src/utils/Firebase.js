import firebase from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDdoOBH4FZbxSHFcGcS3PLAlIOqZhErVJ0",
  authDomain: "kanapka-xuri.firebaseapp.com",
  databaseURL: "https://kanapka-xuri.firebaseio.com",
  projectId: "kanapka-xuri",
  storageBucket: "kanapka-xuri.appspot.com",
  messagingSenderId: "401326008297",
  appId: "1:401326008297:web:c54c97cfcf74deef4ccd78",
  measurementId: "G-WPVFJY49WW"
};

firebase.initializeApp(firebaseConfig);

export const usersCollection = firebase.firestore().collection('users');
export const ordersCollection = firebase.firestore().collection('orders');

export default firebase;