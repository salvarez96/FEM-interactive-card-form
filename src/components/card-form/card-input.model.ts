export interface CardInputModel {
  formTitle: string
  labelId: string
  placeHolder: string
  errorMessage: () => string,
  onChangeVal: any
  type?: 'text' | 'tel' | 'number'
  maxLength?: number;
  minLength?: number
  pattern?: string
  min?: number
  max?: number
}
