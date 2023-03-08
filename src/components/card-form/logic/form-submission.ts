import { FormEvent } from "react"

export function handleFormSubmission(e: FormEvent<HTMLFormElement>, formSubmission: boolean, setFormSubmission: (T: boolean) => boolean, cardHolderName: string) {
  e.preventDefault()
  setFormSubmission(true)
  if (formSubmission) {
    console.log(`${cardHolderName.endsWith('s') ? cardHolderName + "'" : cardHolderName + "'s"} card data sent to wherever it should be sent`)
  }
}