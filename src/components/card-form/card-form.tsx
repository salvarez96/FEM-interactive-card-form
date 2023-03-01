import React from 'react'
import CardInput from './card-input'
import styles from './card-form.module.scss'

export default function CardForm() {
  return (
    <form className={styles['card-form-container']}>
      <CardInput 
        formTitle={'Cardholder name'}
        labelId={'card-holder-name'}
        placeHolder={'e.g Jane Appleseed'}
        />
      <CardInput 
        formTitle={'Card number'}
        labelId={'card-number'}
        placeHolder={'e.g 1234 5678 9123 0000'}
        maxLength={16}
        pattern={/[0-9]/}
      />
    </form>
  )
}
