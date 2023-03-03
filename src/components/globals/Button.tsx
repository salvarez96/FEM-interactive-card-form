import React, { FormEvent } from 'react'
import { GlobalButton } from './globals.model'

export default function Button({ type, buttonText }: GlobalButton) {
  function preventDefault(e: FormEvent<HTMLButtonElement>) {
    e.preventDefault()
    console.log(e);
    // if (e === 'submit') {
    // }
  }

  return (
    <button type={type} onSubmit={preventDefault}>{buttonText}</button>
  )
}
