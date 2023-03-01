import React from 'react'
import { CardInputModel } from './card-input.model'

export default function CardInput({ type, formTitle, labelId, placeHolder,  maxLength, pattern }: CardInputModel) {
  return (
    <>
      <label htmlFor={labelId}>{formTitle}</label>
      <input 
        type={type ?? 'tel'}
        id={labelId} 
        placeholder={placeHolder} 
        maxLength={maxLength}
        pattern={pattern}
        required
      />
    </>
  )
}
