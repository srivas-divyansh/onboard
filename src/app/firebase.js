import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhiX5P5FbzAArLLq_sSLHs3nnl0MJ5Aiw",
  authDomain: "onboard-ba2f2.firebaseapp.com",
  projectId: "onboard-ba2f2",
  storageBucket: "onboard-ba2f2.appspot.com",
  messagingSenderId: "885991091403",
  appId: "1:885991091403:web:936c1bc889630ae7c97f4e",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };
