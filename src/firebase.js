import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBJRr5CjZt8XBvG6VSvU3q6K4lcw0Pj7Wk",
  authDomain: "you2up-d67ea.firebaseapp.com",
  projectId: "you2up-d67ea",
  storageBucket: "you2up-d67ea.appspot.com",
  messagingSenderId: "762576691355",
  appId: "1:762576691355:web:8a1a70adafa3d5c4e8263e",
  measurementId: "G-J58BG0QNJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
