import React, { PropsWithChildren } from 'react'
import { CardInfoContextModel } from './card-info-context.model'

// @ts-expect-error
export const CardInfoGlobalContext = React.createContext<CardInfoContextModel>(CardInfoContext)

export default function CardInfoContext(prop: PropsWithChildren) {
  const [cardHolderName, setCardHolderName] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')
  const [cardExpMM, setCardExpMM] = React.useState('')
  const [cardExpYY, setCardExpYY] = React.useState('')
  const [cardCvv, setCardCvv] = React.useState('')
  const [formSubmission, setFormSubmission] = React.useState(false)

  return (
    <CardInfoGlobalContext.Provider value={{
      cardHolderName,
      setCardHolderName,
      cardNumber,
      setCardNumber,
      cardExpMM,
      setCardExpMM,
      cardExpYY,
      setCardExpYY,
      cardCvv,
      setCardCvv,
      formSubmission,
      setFormSubmission
    }}>
      { prop.children }
    </CardInfoGlobalContext.Provider>
  )
}
