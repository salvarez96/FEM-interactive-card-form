import React from 'react'
import CardInput from './card-input'
import styles from './card-form.module.scss'
import Button from '../globals/Button'

export default function CardForm() {
  return (
    <div className={styles['card-form-container']}>
      <form>
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
          pattern={"[0-9]{16,16}"}
        />
        <div className={styles['card-details']}>
          <p>EXP.DATE</p>
          <div>
            <CardInput 
              formTitle={'MM'}
              labelId={'month'}
              placeHolder={'MM'}
              maxLength={2}
              pattern={"\\d{1,2}"}
            />
          </div>
          <div>
            <CardInput 
              formTitle={'YY'}
              labelId={'year'}
              placeHolder={'YY'}
              maxLength={2}
              pattern={"\\d{1,2}"}
            />
          </div>
          <div>
            <CardInput 
              formTitle={'Cvc'}
              labelId={'cvc'}
              placeHolder={'e.g 123'}
              maxLength={3}
              pattern={"\\d{3,3}"}
            />
          </div>
        </div>
      </form>
      <Button
        type={'submit'}
        buttonText={'Confirm'}
      />
    </div>
  )
}
