import { ChangeEvent, FormEvent, InputHTMLAttributes } from "react";

export interface CardInputModel extends InputHTMLAttributes<HTMLInputElement>{
  formTitle: string
  labelId: string
  placeHolder: string
  errorMessage: () => string
  type?: 'text' | 'tel' | 'number'
  onChangeVal: (e: FormEvent<HTMLInputElement>) => void
  // maxLength?: number
  // minLength?: number
  // pattern?: string
  // min?: number
  // max?: number
  // list?: string
}

