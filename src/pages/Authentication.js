import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//components
import SignUpForm from '../components/sign-up-form'
import SignInForm from '../components/sign-in-form'

const Authentication = () => {

  return (
    <div>
      <ToastContainer/>
      <div className='sign-in-panel'>
        <SignInForm />
      </div>
      <div className='sign-up-panel'>
        <SignUpForm />
      </div>
    </div>
  )
}

export default Authentication