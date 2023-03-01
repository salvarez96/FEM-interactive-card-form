import React from 'react'
import { CardInputModel } from './card-input.model'

export default function CardInput({ formTitle, labelId, placeHolder,  maxLength, pattern }: CardInputModel) {
  return (
    <>
      <label htmlFor={labelId}>{formTitle}</label>
      <input 
        type="text" 
        id={labelId} 
        placeholder={placeHolder} 
        maxLength={maxLength}
        pattern={pattern}
        required
      />
    </>
  )
}
