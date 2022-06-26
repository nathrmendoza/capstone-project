import React, {useRef, useEffect} from 'react'
import Button from './button'
import '../styles/components/cart-dropdown.scss'

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

  return (
    <div className='cart-dropdown' ref={wrapperRef} >
      <div className='cart-items'>
      </div>
      <Button buttonType='default' type='button'>Go to checkout</Button>
    </div>
  )
}

export default CartDropDown