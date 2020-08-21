import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
  apiKey: 'AIzaSyAQOAkOl-R3FEnHqGWHwCy1bZo7dnGP6rE',
  authDomain: 'vital-measures.firebaseapp.com',
  databaseURL: 'https://vital-measures.firebaseio.com',
  projectId: 'vital-measures',
  storageBucket: 'vital-measures.appspot.com',
  messagingSenderId: '737617003916',
  appId: '1:737617003916:web:20c690a51c53c54d1b02a9',
  measurementId: 'G-LLK4871TN3',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const db = firebase.database();
