import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyBCn0RR6y50pN5nOzwFYA_QYV1VqpLPljk",
  authDomain: "coderhouse-react-ecommer-1d90c.firebaseapp.com",
  projectId: "coderhouse-react-ecommer-1d90c",
  storageBucket: "coderhouse-react-ecommer-1d90c.appspot.com",
  messagingSenderId: "289506336997",
  appId: "1:289506336997:web:e6b8c6d46220aa16cc340c",
  measurementId: "G-302HJQVRTT"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;