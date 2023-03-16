import type { Dispatch, FormEvent } from "react"
import type { CardInputModel } from "../card-input.model"

export function validateInfo(e: FormEvent<HTMLInputElement>) {
  const value = e.currentTarget.value
  if (e.currentTarget.type === 'tel' || e.currentTarget.type === 'number') {
    e.currentTarget.value = value.trim()
    e.currentTarget.value = value.replace(/[A-ú]/, '')
    
    if (e.currentTarget.id === 'month') {
      const monthValue = Number(value)
      if (monthValue < 13 && monthValue > 0) {
        e.currentTarget.value = value
        e.currentTarget.setCustomValidity('')
      } else {
        e.currentTarget.value = value.replaceAll(/[0-9]/g, '')
        e.currentTarget.setCustomValidity('Remember numerical months go between 1 and 12')
      }
    }
    
    if (e.currentTarget.id === 'year' && e.currentTarget.value.length > 2) {
      e.currentTarget.value = value.replace(/[0-9]/g, '')
    }
    
    if (e.currentTarget.id === 'cvc') {
      e.currentTarget.value = value.replace(/[A-ú ]/, '')
    }
  }
  
  if (e.currentTarget.type === 'text') {
    e.currentTarget.value = value.trim()
    e.currentTarget.value = value.replace(/[0-9]/, '')
  }
}

export function errorMessageHandler(
  e: FormEvent<HTMLInputElement>,
  errorSetter: Dispatch<React.SetStateAction<string>>, 
  errorMessage: CardInputModel['errorMessage']
  ) {
  !e.currentTarget.validity.valid ? errorSetter(errorMessage()) : errorSetter('')
}