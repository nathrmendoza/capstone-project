import React, { Fragment, useContext} from 'react'
import { Link, Outlet } from 'react-router-dom'

import { UserContext } from '../context/user.context'
import Button, { BUTTON_TYPES } from './button';
import CartIcon from './cart-icon';

import { signOutUser } from '../utils/firebase/firebase.utils';
import CartDropDown from './cart-dropdown';
import { CartContext } from '../context/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setCartOpen } = useContext(CartContext);

  const toggleCartDropdown = () => {
    setCartOpen(!isCartOpen);
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
              <li><Button type='button' buttonType={BUTTON_TYPES.default} onClick={signOutUser}>Sign out</Button></li>
              <li style={{position: 'relative'}}><CartIcon onClickHandler={toggleCartDropdown}/>
                {isCartOpen && <CartDropDown clickOutsideHandler={toggleCartDropdown}/>}
              </li>
            </Fragment>
          }
          
        </ul>
      </nav>
      <Outlet/>
    </Fragment>
  )
}

export default Navigation