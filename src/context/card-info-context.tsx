import { createContext, useState } from 'react'
import type { PropsWithChildren } from 'react'
import type { CardInfoContextModel } from './card-info-context.model'

// @ts-expect-error
export const CardInfoGlobalContext = createContext<CardInfoContextModel>(CardInfoContext)

export default function CardInfoContext({ children }: PropsWithChildren) {
  const [cardHolderName, setCardHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpMM, setCardExpMM] = useState('')
  const [cardExpYY, setCardExpYY] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [formSubmission, setFormSubmission] = useState(false)

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
      { children }
    </CardInfoGlobalContext.Provider>
  )
}
