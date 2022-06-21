import React from 'react'

const FormInput = ({label, ...otherProps}) => (
  <input placeholder={label} {...otherProps}/>
)

export default FormInput