// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyATuurpySuRsCR088RFVfOXowFLPox9u8A',
  authDomain: 'portfolio-8ed46.firebaseapp.com',
  projectId: 'portfolio-8ed46',
  storageBucket: 'portfolio-8ed46.appspot.com',
  messagingSenderId: '813583721080',
  appId: '1:813583721080:web:4a87599be7556b02f4038d',
  measurementId: 'G-3Q491P2T8R'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
