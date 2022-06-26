import React, { useContext } from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../context/cart.context'
import '../styles/components/cart-icon.scss'


const CartIcon = ({onClickHandler}) => {
  
  return (
    <div className='cart-icon' onClick={onClickHandler}>
      <BsFillCartFill/>
      <span>0</span>
    </div>
  )
}

export default CartIcon