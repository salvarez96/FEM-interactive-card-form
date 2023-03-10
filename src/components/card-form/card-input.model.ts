import { ChangeEvent } from "react";

export interface CardInputModel {
  formTitle: string
  labelId: string
  placeHolder: string
  errorMessage: () => string,
  onChangeVal: (e: ChangeEvent<HTMLInputElement>) => void
  type?: 'text' | 'tel' | 'number'
  maxLength?: number
  minLength?: number
  pattern?: string
  min?: number
  max?: number
  list?: string
}
