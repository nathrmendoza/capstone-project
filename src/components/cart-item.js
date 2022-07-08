import React from 'react'

import '../styles/components/cart-item.scss'
import {
  CartItemWrapper, 
  ContentWrapper,
  ImageWrapper,
  ItemName,
  QuanPrice,
  SmallText} 
  from '../styles/components/cart/cart-item.styles'

const CartItem = ({item}) => {
  const {name, imageUrl, quantity, price} = item;
  
  return (
    <CartItemWrapper>
      <ImageWrapper>
        <img src={imageUrl} alt={`${name}-pic`}/>
      </ImageWrapper>
      <ContentWrapper>
      </ContentWrapper>
        <ItemName>{name}</ItemName>
        <QuanPrice>
          <SmallText>x{quantity}</SmallText>
          <SmallText>${price}</SmallText>
        </QuanPrice>
    </CartItemWrapper>
  )
}

export default CartItem