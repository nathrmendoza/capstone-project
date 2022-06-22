import React, { Fragment, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { UserContext } from '../context/user.context'
import Button from './button';

import { signOutUser } from '../utils/firebase/firebase.utils';

const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <nav>
        <ul className='left-nav'>
          <li><Link to='/'>Homepage</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/shop/subpage'>Shop subpage</Link></li>
        </ul>
        <ul className='right-nav'>
          {!currentUser ? <li><Link to='/authentication'>Sign in</Link></li> 
          : <Fragment>
              <li><p>Hi {currentUser.displayName}</p></li>
              <li><Button type='button' buttonType='default' onClick={signOutHandler}>Sign out</Button></li>
            </Fragment>}
          
        </ul>
      </nav>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation