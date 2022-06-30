import React, {useContext} from 'react'
import CheckoutItem from '../components/checkout-item'

import { CartContext } from '../context/cart.context'

const CheckoutPage = () => {

  const { cartItems, cartPriceTotal } = useContext(CartContext)

  return (
    <div className='checkout-table'> 
      <div className='table-headers'>
        <span>Image</span>
        <span>Name</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      <div className='table-items'>
        {cartItems.length
          ? cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)
          : <div className='no-items'>No items added yet!</div>}
      </div>
      <div className='total-row'>
        Total: ${cartPriceTotal}
      </div>
    </div>
  )
}

export default CheckoutPage