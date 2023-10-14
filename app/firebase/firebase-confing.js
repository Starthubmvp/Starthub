import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAlddtZKoBHEyunnLtOhG0xTPLTX8EMAVg",
  authDomain: "starthub-394809.firebaseapp.com",
  databaseURL: "https://starthub-394809-default-rtdb.firebaseio.com",
  projectId: "starthub-394809",
  storageBucket: "starthub-394809.appspot.com",
  messagingSenderId: "657725938939",
  appId: "1:657725938939:web:a9713466d018a4a30fe45e",
  measurementId: "G-SQT1W5PX33"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);