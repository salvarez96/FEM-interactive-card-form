import { ChangeEvent } from "react"

export function validateInfo(e: ChangeEvent<HTMLInputElement>) {
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
        e.target.value = value.replaceAll(/[0-9]/g, '')
        e.target.setCustomValidity('Remember numerical months go between 1 and 12')
      }
    }

    if (e.target.id === 'year' && e.target.value.length > 2) {
      e.target.value = value.replace(/[0-9]/g, '')
    }
  }
  
  if (e.target.type === 'text') {
    e.target.value = value.trim()
    e.target.value = value.replace(/[0-9]/, '')
  }
}

export function errorMessageHandler(
  e: ChangeEvent<HTMLInputElement>,
  errorSetter: React.Dispatch<React.SetStateAction<string>>, 
  errorMessage: () => string
  ) {
  if (!e.target.validity.valid) {
    errorSetter(errorMessage())
  } else {
    errorSetter('')
  }
}