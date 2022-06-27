import React, { useContext } from 'react'
import Button from '../components/button'
import { CartContext } from '../context/cart.context'

const CheckoutItem = ({item}) => {
  const {name, imageUrl, quantity, price} = item
  
  const {addItemQuantity, subItemQuantity} = useContext(CartContext);
  
  const addHandler = () => addItemQuantity(item)
  const subHandler = () => subItemQuantity(item)

  return (
    <div className='checkout-item'>
      <div className='thumbnail'>
        <img src={imageUrl} alt={`${name}-pic`} />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <Button buttonType='invert' onClick={subHandler} type="button">-</Button>
        <div className='quan-text'>{quantity}</div>
        <Button buttonType='invert' onClick={addHandler} type="button">+</Button>
      </div>
      <div className='remove'>
        <Button buttonType='invert' type='button'>X</Button>
      </div>
    </div>
  )
}

export default CheckoutItem