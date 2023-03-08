import React, { ChangeEvent, FormEvent } from 'react'
import CardInput from './card-input'
import styles from './card-form.module.scss'
import Button from '../globals/Button'
import { errorMessages } from './logic/error-messages'
import { CardInfoGlobalContext } from '../../context/card-info-context'
import { handleFormSubmission } from './logic/form-submission'

const errors = errorMessages()

export default function CardForm() {

  const {
    cardHolderName,
    setCardHolderName, 
    setCardNumber,
    setCardExpMM,
    setCardExpYY,
    setCardCvv,
    formSubmission,
    setFormSubmission
  } = React.useContext(CardInfoGlobalContext)

  return (
    <div className={styles['card-form-container']}>
      <form onSubmit={(e) => handleFormSubmission(
        e, 
        formSubmission,
        setFormSubmission,
        cardHolderName
        )}>
        <CardInput 
          type='text'
          formTitle={'Cardholder name'}
          labelId={'card-holder-name'}
          placeHolder={'e.g Jane Appleseed'}
          pattern={"^\\D+\\S+$"}
          errorMessage={errors.cardHolderNameError}
          onChangeVal={(e: ChangeEvent<HTMLInputElement>) => {
            setCardHolderName(e.target.value)
          }}
          />
        <CardInput 
          type='tel'
          formTitle={'Card number'}
          labelId={'card-number'}
          placeHolder={'e.g 1234 5678 9123 0000'}
          maxLength={19}
          minLength={19}
          pattern={"^(\\d{4,4} )+\\d{4,4}$"}
          errorMessage={errors.cardNumberError}
          onChangeVal={(e: ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value
            setCardNumber(value.replaceAll(' ', ''))

            const cardNumberArr = value.split('')
            if (cardNumberArr[3] && cardNumberArr[4] !== ' ')
              cardNumberArr.splice(4, 0, ' ')

            if (cardNumberArr[8] && cardNumberArr[9] !== ' ')
              cardNumberArr.splice(9, 0, ' ')

            if (cardNumberArr[13] && cardNumberArr[14] !== ' ')
              cardNumberArr.splice(14, 0, ' ')
                  
            e.target.value = cardNumberArr.join('')
          }}
          />
        <div className={styles['card-details']}>
          <p>EXP.DATE</p>
          <div>
            <CardInput 
              formTitle={'MM'}
              labelId={'month'}
              placeHolder={'MM'}
              maxLength={2}
              minLength={1}
              pattern={"\\d{1,2}"}
              min={1}
              max={12}
              errorMessage={errors.mmError}
              onChangeVal={(e: ChangeEvent<HTMLInputElement>) => {
                setCardExpMM(e.target.value)
              }}
              />
          </div>
          <div>
            <CardInput 
              formTitle={'YY'}
              labelId={'year'}
              placeHolder={'YY'}
              maxLength={2}
              pattern={"\\d{2,2}"}
              min={new Date().getFullYear() - 2000}
              errorMessage={errors.yyError}
              onChangeVal={(e: ChangeEvent<HTMLInputElement>) => {
                setCardExpYY(e.target.value)
              }}
              />
          </div>
          <div>
            <CardInput 
              type='tel'
              formTitle={'Cvc'}
              labelId={'cvc'}
              placeHolder={'e.g 123'}
              maxLength={3}
              pattern={"\\d{3,3}"}
              errorMessage={errors.cvcError}
              onChangeVal={(e: ChangeEvent<HTMLInputElement>) => {
                setCardCvv(e.target.value)
              }}
              />
          </div>
        </div>
        <Button
          type={'submit'}
          buttonText={'Confirm'}
        />
      </form>
    </div>
  )
}
