import React from 'react'
import { GlobalButton } from './globals.model'

export default function Button({ type, buttonText }: GlobalButton) {
  return (
    <button type={type}>{buttonText}</button>
  )
}
