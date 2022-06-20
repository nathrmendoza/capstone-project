import React, {useEffect} from 'react'

//components
import SignUp from '../components/sign-up'

//firebase
import { getRedirectResult } from 'firebase/auth'
import { 
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocument 
  } from '../utils/firebase/firebase.utils'

const SignIn = () => {

  useEffect(() => {
    const redirectedGoogleSign = async () => {
      const response =   await getRedirectResult(auth);
      
      if (response === null) return;

      const userDocRef = await createUserDocument(response.user);
    }
    redirectedGoogleSign();
  }, [])
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  }

  return (
    <div>
      <SignUp/>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with google redirect</button>
    </div>
  )
}

export default SignIn