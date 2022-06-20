import React, {useState} from 'react'
import {createAuthUserWithEmailPassword, createUserDocument} from '../utils/firebase/firebase.utils'

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
      <h1>Sign in to your account</h1>
      <form target='_self' onSubmit={onFormSubmit}>
        <ul>
          <li>
            <label htmlFor='dname'>Display name</label>
            <input type='text' required id='dname' name='displayName' onChange={onChangeHandler} value={displayName}/>
          </li>
          <li>
            <label htmlFor='email'>Email</label>
            <input type='email' required id='email' name='email' onChange={onChangeHandler} value={email}/>
          </li>
          <li>
            <label htmlFor='password'>Password</label>
            <input type='password' required id='password' name='password' onChange={onChangeHandler} value={password}/>
          </li>
          <li>
            <label htmlFor='confirmpass'>Confirm Password</label>
            <input type='password' required id='confirmpass' name='confirmPassword' onChange={onChangeHandler} value={confirmPassword}/>
          </li>
        </ul>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUp