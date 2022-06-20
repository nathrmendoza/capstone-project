import React from 'react'
import { signInWithGooglePopup, createUserDocument } from '../utils/firebase/firebase.utils'

const SignIn = () => {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  }
  
  return (
    <div>
      <button onClick={logGoogleUser}>Sign in with google</button>
    </div>
  )
}

export default SignIn