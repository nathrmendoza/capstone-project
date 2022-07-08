import React, {useRef, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './button'

import { CartDropdownWrapper, CartItemsWrapper } from '../styles/components/cart/cart-dropdown.styles'

import CartItem from './cart-item';
import { CartContext } from '../context/cart.context';

function useOnClickOutside(ref, func) {
  useEffect(() => {
    function handleClickOutside(event) {  
      if (ref.current && !event.target.classList.contains('cart-icon') && !ref.current.contains(event.target)) {
        func();
      }
    }
    
    //bind el
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      //clean up remove el
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, func]);
}

const CartDropDown = ({clickOutsideHandler}) => {

  const wrapperRef = useRef(null);
  useOnClickOutside(wrapperRef, clickOutsideHandler);

  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropdownWrapper ref={wrapperRef}>
      <CartItemsWrapper>
        {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </CartItemsWrapper>
      <Button buttonType='default' type='button' onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownWrapper>
  )
}

export default CartDropDown