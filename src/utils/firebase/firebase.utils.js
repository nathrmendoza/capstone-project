import { initializeApp } from 'firebase/app'
import { getAuth, 
        signInWithRedirect, 
        signInWithPopup, 
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged
} from 'firebase/auth'

import { 
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  writeBatch,
  getDocs,
  query
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


//google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

//google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


//instantiate DB
export const db = getFirestore();


//Add batch collection and documents
export const addCollectionAndDocumnets = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);  
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
}

//Create a user
export const createUserDocument = async(
  user, 
  options = {}) => {
    
  if (!user) return;

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
        createdAt,
        ...options
      });
    } catch(err) {
      console.log('Error setting up user', err);
    }
  } else {
    console.log('User already exists, will sign you in instead');
  }

  return userDocRef;
}


//email and password 
export const createAuthUserWithEmailPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

//sign in with email and password
export const signInEP = async (email, password) => {

  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
  
}

export const getUserDetails = async (user) => {
  let userSnapshot = null;
  try {
    let userDocRef = user;
    
    if (!userDocRef.id)
      userDocRef = doc(db, 'users', user.uid);
    
    userSnapshot = await getDoc(userDocRef);

  } catch (err) {
    console.log(err)
  }
  
  return userSnapshot.data();
}

//sign out
export const signOutUser = async () => signOut(auth);

//AUTH STATE CHANGE
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback )



//GET CATEGORIES AND PRODUCTS
export const getCategoriesDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    //destructure 
    const {title, items} = docSnapshot.data();
    //assign title as array then assign items array
    acc[title.toLowerCase()] = items;
    
    return acc;
  }, {})

  return categoryMap;
}