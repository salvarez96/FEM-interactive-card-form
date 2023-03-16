import React from 'react'
import { CardInputModel } from './card-input.model'
import { errorMessageHandler, validateInfo } from './logic/validation-logic'

export default function CardInput({ 
  type, 
  formTitle, 
  labelId, 
  errorMessage,
  onChangeVal,
  ...inputAttr
}: CardInputModel) {

  const [error, setError] = React.useState('')

  return (
    <>
      <label htmlFor={labelId}>{formTitle}</label>
      <input 
        type={type ?? 'text'}
        id={labelId} 
        onChange={(e) => {
          validateInfo(e)
          errorMessageHandler(e, setError, errorMessage)
          onChangeVal(e)
        }}
        { ...inputAttr }
        required
      />
      <span id={`${labelId}Error`} aria-live='polite'>{error}</span>
    </>
  )
}
