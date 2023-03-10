import React from 'react'
import { CardInputModel } from './card-input.model'
import { errorMessageHandler, validateInfo } from './logic/validation-logic'

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
  list, 
  errorMessage,
  onChangeVal
}: CardInputModel) {

  const [error, setError] = React.useState('')

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
        list={list}
        onChange={(e) => {
          validateInfo(e)
          errorMessageHandler(e, setError, errorMessage)
          onChangeVal(e)
        }}
        required
      />
      <span id={`${labelId}Error`} aria-live='polite'>{error}</span>
    </>
  )
}
