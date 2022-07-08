import React, { useContext } from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { CartContext } from '../context/cart.context'

import {CartIconWrapper,CartCount} from '../styles/components/cart/cart-icon.styles'

const CartIcon = ({onClickHandler}) => {
  
  const { cartQuantityOfItems } = useContext(CartContext)

  return (
    <CartIconWrapper onClick={onClickHandler}>
      <BsFillCartFill/>
      <CartCount>{cartQuantityOfItems}</CartCount>
    </CartIconWrapper>
  )
}

export default CartIcon