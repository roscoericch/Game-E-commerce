import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  query,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgqJpLG1b3T4P7XrTsDnFleLH_L77ZpSM",
  authDomain: "gamestore-d717e.firebaseapp.com",
  projectId: "gamestore-d717e",
  storageBucket: "gamestore-d717e.appspot.com",
  messagingSenderId: "746277784272",
  appId: "1:746277784272:web:ae1697747d1d14a37decd5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const goggleProvider = new GoogleAuthProvider();
goggleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, goggleProvider);

export const createUserDocument = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error, "error creating user");
    }
  }
  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangeListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

//////////////////////GET DATA
export const collectionRef = collection(db, "users");
export const getData = async (id) => {
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  let data;
  querySnapshot.docs
    .filter((item) => {
      return item.id === id;
    })
    .map((item) => {
      return (data = item.data());
    });
  // await getDocs(collectionRef).then((response) => {
  //   data = response.docs
  //     .filter((item) => {
  //       return item.id === id;
  //     })
  //     .map((item) => item.data());
  // });
  // return data;
};
