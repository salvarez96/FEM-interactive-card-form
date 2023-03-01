import React, { ChangeEvent, ChangeEventHandler } from 'react'
import { CardInputModel } from './card-input.model'

export default function CardInput({ type, formTitle, labelId, placeHolder,  maxLength, pattern }: CardInputModel) {

  function validateInfo(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    if (e.target.type === 'tel') {
      e.target.value = value.trim()
      e.target.value = value.replace(/[A-z]/, '')

      if (e.target.id === 'month') {
        const monthValue = Number(value)
        monthValue < 13 && monthValue > 0 ? e.target.value = value : e.target.value = value.replace(/[0-9]/, '')
      }
    }
  }

  return (
    <>
      <label htmlFor={labelId}>{formTitle}</label>
      <input 
        type={type ?? 'tel'}
        id={labelId} 
        placeholder={placeHolder} 
        maxLength={maxLength}
        pattern={pattern}
        onChange={validateInfo}
        required
      />
    </>
  )
}
