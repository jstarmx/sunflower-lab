import * as sapper from '@sapper/app';
import '@sunflower-lab/greenhouse/src/styles/vars.css';
import '@sunflower-lab/greenhouse/src/styles/global.css';
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCTZNcf_NrG3pEQpdat58lCSrbs5fnE2Y8',
  authDomain: 'forget-me-not-app.firebaseapp.com',
  databaseURL: 'https://forget-me-not-app.firebaseio.com',
  projectId: 'forget-me-not-app',
  storageBucket: 'forget-me-not-app.appspot.com',
  messagingSenderId: '1039937894418',
  appId: '1:1039937894418:web:6e21c2018fa7416c6940cb',
  measurementId: 'G-5RVYT2LC3W',
};

firebase.initializeApp(firebaseConfig);

sapper.start({
  target: document.querySelector('#sapper'),
});
