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
        pattern={[0-9]}
      />
      <div className={styles['card-details']}>
        <p>EXP.DATE</p>
        <div>
          <CardInput 
            formTitle={'MM'}
            labelId={'month'}
            placeHolder={'MM'}
            maxLength={2}
            pattern={0-12}
          />
        </div>
        <div>
          <CardInput 
            formTitle={'YY'}
            labelId={'year'}
            placeHolder={'YY'}
            maxLength={2}
            pattern={[0-9]}
          />
        </div>
        <div>
          <CardInput 
            formTitle={'Cvc'}
            labelId={'cvc'}
            placeHolder={'e.g 123'}
            maxLength={3}
            minLength={3}
            pattern={[0-9]}
          />
        </div>
      </div>
    </form>
  )
}
