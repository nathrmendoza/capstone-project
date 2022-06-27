import React from 'react'
import Button from '../components/button'

const CheckoutItem = ({item}) => {
  const {name, imageUrl, quantity, price} = item
  return (
    <div className='checkout-item'>
      <div className='thumbnail'>
        <img src={imageUrl} alt={`${name}-pic`} />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <Button buttonType='invert' type="button">-</Button>
        <div className='quan-text'>{quantity}</div>
        <Button buttonType='invert' type="button">+</Button>
      </div>
      <div className='remove'>
        <Button buttonType='invert' type='button'>X</Button>
      </div>
    </div>
  )
}

export default CheckoutItem