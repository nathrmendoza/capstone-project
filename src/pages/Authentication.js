import React from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//components
import SignUpForm from '../components/sign-up-form'
import SignInForm from '../components/sign-in-form'

const notifOptions = {
  position: toast.POSITION.BOTTOM_LEFT
}

const Authentication = () => {

  const notify = (message, type='') => {
    if(type === 'error' || type === '') 
      toast.error(message, notifOptions);
    else if (type === 'warn') 
      toast.warn(message, notifOptions);
    else if (type === 'success') 
      toast.success(message, notifOptions);
  }

  return (
    <div>
      <ToastContainer/>
      <div className='sign-in-panel'>
        <SignInForm notifyHandler={notify}/>
      </div>
      <div className='sign-up-panel'>
        <SignUpForm notifyHandler={notify}/>
      </div>
    </div>
  )
}

export default Authentication