import React from 'react'
import { CardInfoGlobalContext } from '../../context/card-info-context'
import Button from '../globals/Button'

export default function Confirmation(props: { className?: string } ) {

  const { setFormSubmission } = React.useContext(CardInfoGlobalContext)

  return (
    <div className={props.className}>
      <img src="/public/icon-complete.svg" alt="Details added" />
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <Button
        type={'button'}
        buttonText={'Continue'}
        onClick={() => setFormSubmission(false)}
      />
    </div>
  )
}
