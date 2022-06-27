import React from 'react'

import '../styles/components/cart-item.scss'

const CartItem = ({item}) => {
  const {name, imageUrl, quantity, price} = item;
  
  return (
    <div className='cart-item'>
      <aside>
        <img src={imageUrl} alt={`${name}-pic`}/>
      </aside>
      <article>
        <h5>{name}</h5>
        <div className='quan-price'>
          <span className='quantity'>x{quantity}</span>
          <span className='price'>${price}</span>
        </div>
      </article>
    </div>
  )
}

export default CartItem