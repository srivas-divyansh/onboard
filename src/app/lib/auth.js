import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  setDoc,
  getDocs,
  query,
  where,
  doc,
} from "firebase/firestore";
import { auth, db } from "@/app/firebase";

export const signup = async (email, password, displayName) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  const userRef = doc(db, "users", user.uid);
  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName,
  });
};

export const signin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const getUserByEmail = async (email) => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].data();
  }
  return null;
};
