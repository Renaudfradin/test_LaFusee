import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC3QsBImW9CVy_YkLFei3YhrYXelw1-gNA",
  authDomain: "testfusee.firebaseapp.com",
  databaseURL: "https://testfusee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testfusee",
  storageBucket: "testfusee.appspot.com",
  messagingSenderId: "521384869465",
  appId: "1:521384869465:web:08feeb2c68b89120367b48",
  measurementId: "G-XVQFQY6D3D"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

export default { auth, database };