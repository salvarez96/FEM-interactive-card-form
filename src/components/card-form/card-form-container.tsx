import { useContext } from 'react'
import type { FormEvent, PropsWithChildren } from 'react'
import { CardInfoGlobalContext } from '../../context/card-info-context'

const currentYear = new Date().getFullYear() - 2000

export default function CardFormContainer({ children }: PropsWithChildren) {

  const {
    setFormSubmission,
    cardHolderName,
    cardNumber,
    cardExpMM,
    cardExpYY,
    cardCvv
  } = useContext(CardInfoGlobalContext)

  function handleFormSubmission(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (cardHolderName.length > 1 
      && cardHolderName.length <= 40
      && !cardHolderName.match(/\d/g)
      && cardNumber.length >= 13
      && cardNumber.length <= 16
      && !isNaN(Number(cardNumber))
      && Number(cardExpMM) >= 1 
      && Number(cardExpMM) <= 12 
      && Number(cardExpYY) >= currentYear 
      && cardCvv.length >= 3
      && cardCvv.length <= 4
      && !isNaN(Number(cardCvv))
      ) {
      setFormSubmission(true)
      // here would lie any kind of logic to send the card data somewhere. Instead, there's this
      // cute console message because why not right?
      console.log(`${cardHolderName.endsWith('s') ? cardHolderName + "'" : cardHolderName + "'s"} card data sent to wherever it should be sent`)
    } else {
      alert('Check your card details because something happened')
      throw new Error('Check your card details because something happened')
    }
  }
    
  return (
    <form onSubmit={handleFormSubmission}>
      { children }
    </form>
  )
}
