import { initializeApp } from 'firebase/app'
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider
      } from 'firebase/auth'

import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCfpstq3E6Pwq_Z0b5oRv3uiO3umKV5FcM",
  authDomain: "capstone-db-8ecf2.firebaseapp.com",
  projectId: "capstone-db-8ecf2",
  storageBucket: "capstone-db-8ecf2.appspot.com",
  messagingSenderId: "598461793907",
  appId: "1:598461793907:web:0ca0e730b032387bb1cc06"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//instantiate DB
export const db = getFirestore();

export const createUserDocument = async(user) => {
  const userDocRef = doc(db, 'users', user.uid);
  
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  
  //check if user does NOT exists, if yes create user doc
  if (!userSnapshot.exists()) {
    const {displayName, email} = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch(err) {
      console.log('Error setting up user', err);
    }
  }

  return userDocRef;
}