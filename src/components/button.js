import React from 'react'

import {BaseButton, DefaultButton, InvertedButton} from '../styles/components/button.styles'

//button types
export const BUTTON_TYPES = {
  base: 'base',
  default: 'default-btn',
  google: 'google-btn',
  submit: 'submit-btn',
  invert: 'inverted-btn',
  addtocard: 'add-to-card-btn'  
}

const getButton = (buttonType = BUTTON_TYPES.base) => (
  {
    [BUTTON_TYPES.base]: BaseButton,
    [BUTTON_TYPES.default]: DefaultButton,
    [BUTTON_TYPES.invert]: InvertedButton
  }[buttonType]
)

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton {...otherProps}>{children}</CustomButton>
  )
}

export default Button