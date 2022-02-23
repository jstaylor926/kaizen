import React from 'react'
import { CardProps } from '../componentTypes';


function BasicCard({ children }: CardProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export default BasicCard