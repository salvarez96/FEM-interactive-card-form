import React, { FormEvent } from 'react'
import { CardInfoGlobalContext } from '../../context/card-info-context';
import { GlobalButton } from './globals.model'

export default function Button({ type, buttonText, onClick }: GlobalButton) {

  return (
    <button type={type} onClick={onClick}>{buttonText}</button>
  )
}
