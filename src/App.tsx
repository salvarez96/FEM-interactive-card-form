import React from 'react'
import CardContainer from './components/card-container/card-container'
import CardForm from './components/card-form/card-form'
import { CardInfoGlobalContext } from './context/card-info-context'

export default function App() {

  const {
    cardHolderName,
    cardNumber,
    cardExpMM,
    cardExpYY,
    cardCvv
  } = React.useContext(CardInfoGlobalContext)

  return (
    <>
      <CardContainer 
        cardHolderName={cardHolderName}
        cardNumber={cardNumber}
        cardExpMM={cardExpMM}
        cardExpYY={cardExpYY}
        cardCvv={cardCvv}
      />
      <CardForm />
    </>
  )
}
