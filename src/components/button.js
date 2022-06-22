import React from 'react'

//button types
const BUTTON_TYPES = {
  default: 'default-btn',
  google: 'google-btn',
  submit: 'submit-btn',
  invert: 'inverted-btn'  
}

const Button = ({ children, buttonType, ...otherProps }) => (
  <button className={`${BUTTON_TYPES[buttonType]}`} {...otherProps}>{children}</button>
)

export default Button