import React, { useContext } from 'react'
import Button, { BUTTON_TYPES } from '../components/button'
import { CartContext } from '../context/cart.context'

const CheckoutItem = ({item}) => {
  const {name, imageUrl, quantity, price} = item
  
  const {addItemQuantity, subItemQuantity, removeItem} = useContext(CartContext);
  
  const addHandler = () => addItemQuantity(item)
  const subHandler = () => subItemQuantity(item)
  const removeHandler = () => removeItem(item);

  return (
    <div className='checkout-item'>
      <div className='thumbnail'>
        <img src={imageUrl} alt={`${name}-pic`} />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <Button buttonType={BUTTON_TYPES.invert} onClick={subHandler} type="button">-</Button>
        <div className='quan-text'>{quantity}</div>
        <Button buttonType={BUTTON_TYPES.invert} onClick={addHandler} type="button">+</Button>
      </div>
      <div className='price'>
        {price}
      </div>
      <div className='remove'>
        <Button buttonType={BUTTON_TYPES.invert} type='button' onClick={removeHandler}>&#1005;</Button>
      </div>
    </div>
  )
}

export default CheckoutItem