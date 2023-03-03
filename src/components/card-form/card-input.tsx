import React, { ChangeEvent } from 'react'
import { CardInputModel } from './card-input.model'

export default function CardInput({ 
  type, 
  formTitle, 
  labelId, 
  placeHolder, 
  maxLength, 
  minLength, 
  pattern, 
  min, 
  max, 
  errorMessage }: CardInputModel
  ) {

  const [error, setError] = React.useState('')

  function validateInfo(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (e.target.type === 'tel' || e.target.type === 'number') {
      e.target.value = value.trim()
      e.target.value = value.replace(/[A-ú]/, '')

      if (e.target.id === 'month') {
        const monthValue = Number(value)
        if (monthValue < 13 && monthValue > 0) {
          e.target.value = value
          e.target.setCustomValidity('')
        } else {
          e.target.value = value.replace(/[0-9]/, '')
          e.target.setCustomValidity('Remember numerical months go between 1 and 12')
        }
      }
    }
    
    if (e.target.type === 'text') {
      e.target.value = value.trim()
      e.target.value = value.replace(/[0-9]/, '')
    }
    
    if (!e.target.validity.valid) {
      setError(errorMessage())
    } else {
      setError('')
    }
  }

  return (
    <>
      <label htmlFor={labelId}>{formTitle}</label>
      <input 
        type={type ?? 'number'}
        id={labelId} 
        placeholder={placeHolder} 
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        min={min}
        max={max}
        onChange={validateInfo}
        required
      />
      <span id={`${labelId}Error`} aria-live='polite'>{error}</span>
    </>
  )
}
