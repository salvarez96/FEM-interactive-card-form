import React, { PropsWithChildren } from 'react'

export const CardInfoGlobalContext = React.createContext<any>(null)

export default function CardInfoContext(prop: PropsWithChildren) {
  const [cardHolderName, setCardHolderName] = React.useState('')
  const [cardNumber, setCardNumber] = React.useState('')
  const [cardExpMM, setCardExpMM] = React.useState('')
  const [cardExpYY, setCardExpYY] = React.useState('')
  const [cardCvv, setCardCvv] = React.useState('')

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
    }}>
      { prop.children }
    </CardInfoGlobalContext.Provider>
  )
}
