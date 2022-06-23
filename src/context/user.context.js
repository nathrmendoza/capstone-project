/**
 * creating context for state management, in this case
 * storing user data from auth (firebase)
 */

import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener, getUserDetails, createUserDocument } from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener( async (user) => {
      if (user) {
        createUserDocument(user);
        const response = await getUserDetails(user);
        setCurrentUser(response);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);
  
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  )
}