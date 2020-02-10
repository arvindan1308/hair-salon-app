import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA5_grBBsvktirMVqdU_NPpj4oKo_xHD0Q',
  authDomain: 'hair-salon-app-3047c.firebaseapp.com',
  databaseURL: 'https://hair-salon-app-3047c.firebaseio.com',
  projectId: 'hair-salon-app-3047c',
  storageBucket: 'hair-salon-app-3047c.appspot.com',
  messagingSenderId: '837139834003',
  appId: '1:837139834003:web:eea1368af47dd80bbb1966',
  measurementId: 'G-EMV9YK53BN'
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
