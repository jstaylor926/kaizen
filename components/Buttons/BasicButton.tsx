import React from 'react'
import { ButtonProps } from '../componentTypes'


function BasicButton({ name, type, value, text }: ButtonProps) {
  return (
    <button
      name={name}
      type={type}
      value={value}
    >
      {text}
    </button>
  )
}

export default BasicButton