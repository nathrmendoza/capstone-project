import React from 'react'
import Button from './button'

import '../styles/components/products/product-card.scss';

const ProductCard = ({product}) => {

  const {name, imageUrl, price} = product;

  return (
    <div className='product-card'>
      <aside className='product-image' style={{backgroundImage: `url(${imageUrl})`}}></aside>
      <div className='product-info'>
        <h3>{name}</h3>
        <span className='price-el'>${price}</span>
        <Button buttonType='invert' type='button'>ADD TO CART</Button>
      </div>
    </div>
  )
}

export default ProductCard