import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBvGBXtPgWhb3lOovB1wEtiAWZldzJeEs",
  authDomain: "chat-df396.firebaseapp.com",
  projectId: "chat-df396",
  storageBucket: "chat-df396.appspot.com",
  messagingSenderId: "680883446704",
  appId: "1:680883446704:web:9c99647d90bfb422f32c75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()