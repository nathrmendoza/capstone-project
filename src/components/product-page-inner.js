import React, { useContext } from 'react'
import Button from '../components/button'
import { CartContext } from '../context/cart.context'

const ProductPageInner = ({product}) => {
  const { name, imageUrl, price } = product;

  const { addItemToCart } = useContext(CartContext);
  
  const addItemToCartHandler = () => addItemToCart(product);

  return (
    <div className='product-inner'>
      <img src={imageUrl} alt='Product Photo'/>
      <h1>{name}</h1><span>{price}</span>
      <Button buttonType='default' type='button' onClick={addItemToCartHandler}>ADD TO CART</Button>
    </div>
  )
}

export default ProductPageInner