import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAeAuwT-zhtFtiy5yx4ZeHMGBzcxDvL7Hk',
  authDomain: 'project-example-a6eda.firebaseapp.com',
  projectId: 'project-example-a6eda',
  storageBucket: 'project-example-a6eda.appspot.com',
  messagingSenderId: '539454439317',
  appId: '1:539454439317:web:d05ee8c009233b9aa6009c',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
