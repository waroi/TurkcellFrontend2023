import {firebase} from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAd4ELIjCKL5xCSw5rXFP5F2iJm6a7uOow",
    authDomain: "test-f7dd4.firebaseapp.com",
    databaseURL: "https://test-f7dd4-default-rtdb.firebaseio.com",
    projectId: "test-f7dd4",
    storageBucket: "test-f7dd4.appspot.com",
    messagingSenderId: "301074390199",
    appId: "1:301074390199:web:762317e6abf06b644d4132",
    measurementId: "G-BG9VJXZ7LV"
  };

firebase.initializeApp(firebaseConfig);


export default firebase;
