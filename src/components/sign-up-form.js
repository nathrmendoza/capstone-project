import React, {useState} from 'react'

//components
import FormInput from './form-input';
import Button from './button';

//firebase
import { 
  createAuthUserWithEmailPassword,
  signInWithGooglePopup,
  createUserDocument,
  getUserDetails
} from '../utils/firebase/firebase.utils'


const formType = {
  displayName : '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = ({notifyHandler}) => {

  const [formFields, setFormFields] = useState(formType);
  const { displayName, email, password, confirmPassword } = formFields
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    console.log(user);

    const userDocRef = await createUserDocument(user);
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!(password === confirmPassword)) {
      notifyHandler('Password mismatch', 'warn')
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);
      const userDocRef = await createUserDocument(user, { displayName });

      //result
      const test = await getUserDetails(userDocRef);
      notifyHandler(`Success, created user ${test.displayName}`, 'success');

      resetForm();

    } catch (err) {
      switch(err.code){
        case 'auth/auth/email-already-in-use' :
          notifyHandler('Email already used')
          break;
        default:
            console.log(err);
      }
    }
  }

  const resetForm = () => {
    setFormFields(formType);
  }

  return (
    <div className='form-wrapper'>
      <h2>Don't have an account?</h2>
      <form target='_self' onSubmit={onFormSubmit}>
        <ul>
          <li>
            <FormInput label='Display Name' type='text' name='displayName' onChange={onChangeHandler} value={displayName}/>
          </li>
          <li>
            <FormInput label='Email' type='email' name='email' onChange={onChangeHandler} value={email}/>
          </li>
          <li>
            <FormInput label='Password' type='password' name='password' onChange={onChangeHandler} value={password}/>
          </li>
          <li>
            <FormInput label='Confirm Password' type='password' name='confirmPassword' onChange={onChangeHandler} value={confirmPassword}/>
          </li>
        </ul>
        <Button type='submit' buttonType='submit'>SUMBIT</Button>
        <Button type='button' buttonType='google' onClick={logGoogleUser}>Sign in with Google</Button>
      </form>
    </div>
  )
}

export default SignUpForm