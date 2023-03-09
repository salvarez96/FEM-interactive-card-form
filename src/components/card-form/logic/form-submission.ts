import { FormEvent } from "react"
import { CardInfoContextModel } from "../../../context/card-info-context.model"

export function handleFormSubmission(e: FormEvent<HTMLFormElement>, formSubmission: boolean, setFormSubmission: CardInfoContextModel['setFormSubmission'], cardHolderName: string) {
  e.preventDefault()
  setFormSubmission(true)
  if (formSubmission) {
    console.log(`${cardHolderName.endsWith('s') ? cardHolderName + "'" : cardHolderName + "'s"} card data sent to wherever it should be sent`)
  }
}