import React from 'react'

const CartItem = ({item}) => {
  const {name, quantity} = item;
  
  return (
    <div className='cart-item'>
      <h5>{name}</h5>
      <span className='quantity'>x{quantity}</span>
    </div>
  )
}

export default CartItem