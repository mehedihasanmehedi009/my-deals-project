// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd01QsBK5zchahGETGdNev4fh9SpUNvPY",
  authDomain: "my-deals-now.firebaseapp.com",
  projectId: "my-deals-now",
  storageBucket: "my-deals-now.firebasestorage.app",
  messagingSenderId: "744620619688",
  appId: "1:744620619688:web:f2ca1662f8b0e3f0f40f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);