import type { Dispatch, SetStateAction } from "react"

export interface CardInfoContextModel {
  cardHolderName: string
  setCardHolderName: Dispatch<SetStateAction<string>>
  cardNumber: string
  setCardNumber: Dispatch<SetStateAction<string>>
  cardExpMM: string
  setCardExpMM: Dispatch<SetStateAction<string>>
  cardExpYY: string
  setCardExpYY: Dispatch<SetStateAction<string>>
  cardCvv: string
  setCardCvv: Dispatch<SetStateAction<string>>
  formSubmission: boolean,
  setFormSubmission: Dispatch<SetStateAction<boolean>>
}