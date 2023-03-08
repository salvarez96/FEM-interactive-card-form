import React, { FormEvent } from 'react'
import { CardInfoGlobalContext } from '../../context/card-info-context';
import { GlobalButton } from './globals.model'

export default function Button({ type, buttonText }: GlobalButton) {

  return (
    <button type={type}>{buttonText}</button>
  )
}
