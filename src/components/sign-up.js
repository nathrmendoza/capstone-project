import React, {useState} from 'react'
import {createAuthUserWithEmailPassword, createUserDocument} from '../utils/firebase/firebase.utils'

import FormInput from './form-input';
import Button from './button';

const formType = {
  displayName : '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {

  const [formFields, setFormFields] = useState(formType);
  const { displayName, email, password, confirmPassword } = formFields
  
  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    if (!(password === confirmPassword)) {
      console.log('password mismatch');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailPassword(email, password);
      const userDocRef = await createUserDocument(user, { displayName });

      resetForm();

    } catch (err) {
      if (err.code == "auth/email-already-in-use") {
        alert('Failed: email already used')
      }
      console.log('error occured signing up', err)
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
      </form>
    </div>
  )
}

export default SignUp