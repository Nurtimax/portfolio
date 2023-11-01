/* eslint-disable no-undef */
// eslint-disable-next-line import/default
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTO_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  databaseURL: process.env.NEXT_PUBLIC_DATA_BASE_URL
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
export const analytics = getAnalytics(app);
export const imageDb = getStorage(app);

export default app;
