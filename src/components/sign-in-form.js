import React, {useState} from 'react'

import { 
  signInEP,
  getUserDetails ,
  signInWithGooglePopup
} from '../utils/firebase/firebase.utils'

import FormInput from './form-input'
import Button from './button'

const formType = {
  email: '',
  password: '',
}

const SignInForm = ({notifyHandler}) => {

  const [formFields, setFormFields] = useState(formType);
  const {email, password} = formFields;

  const resetForm = () => {
    setFormFields(formType)
  }
  
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    console.log(user)
    notifyHandler(`Hey ${user.displayName}!`, 'success');
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value})
  }

  const onSubmitHandler = async (ev) => {
    ev.preventDefault();
    
    try {
      const { user } = await signInEP(email, password);
      const test = await getUserDetails(user);
      
      //result
      console.log(test);

      resetForm();
      notifyHandler(`Hey, ${test.displayName}`, 'success');
    } 
    catch (err) {
      switch(err.code){
        case 'auth/user-not-found' :
          notifyHandler('No user found with email')
          break;
        case 'auth/wrong-password' :
            notifyHandler('Wrong password')
            break;
        default:
            console.log(err);
      }
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <ul>
        <li><FormInput label='Email' type='email' name='email' onChange={onChangeHandler} value={email}/></li>
        <li><FormInput label='Password' type='password' name='password' onChange={onChangeHandler} value={password}/></li>
      </ul>
      <Button type='submit' buttonType='submit'>SUBMIT</Button>
      <Button type='button' buttonType='google' onClick={signInWithGoogle}>Sign in with Google</Button>
    </form>
  )
}

export default SignInForm