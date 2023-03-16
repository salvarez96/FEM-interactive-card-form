import type { FormEvent, InputHTMLAttributes } from "react";

export interface CardInputModel extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'id'>{
  /**
   * Use `formTitle` for `label` content inside `CardInput` component
   */
  formTitle: string
  /**
   * Use `labelId` instead of `id` for `CardInput` component
   */
  labelId: string
  placeholder: string
  /**
   * Use `errorMessage` to display custom error messages. You can add more in the `errorMessage` HOF in *error-messages.ts* file
   */
  errorMessage: () => string
  /**
   * Use `onChangeVal` instead of `onChange` for `CardInput` component
   */
  onChangeVal: (e: FormEvent<HTMLInputElement>) => void
  type?: 'text' | 'tel' | 'number'
}
