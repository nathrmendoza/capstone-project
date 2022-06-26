import React, { useContext } from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../context/cart.context'

import '../styles/components/cart-icon.scss'

const CartIcon = ({quantity, onClickHandler}) => {
  
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-icon' onClick={onClickHandler}>
      <BsFillCartFill/>
      <span>{cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0)}</span>
    </div>
  )
}

export default CartIcon