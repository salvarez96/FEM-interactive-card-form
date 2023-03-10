import React from 'react'
import CardInput from './card-input'
import styles from './card-form.module.scss'
import Button from '../globals/Button'
import { errorMessages } from './logic/error-messages'
import { CardInfoGlobalContext } from '../../context/card-info-context'
import Confirmation from './confirmation'
import CardFormContainer from './card-form-container'

const errors = errorMessages()
const months = [1,2,3,4,5,6,7,8,9,10,11,12]

export default function CardForm() {

  const {
    setCardHolderName, 
    setCardNumber,
    setCardExpMM,
    setCardExpYY,
    setCardCvv,
    formSubmission
  } = React.useContext(CardInfoGlobalContext)

  return (
    <div className={styles['card-form-container']}>
      {!formSubmission && <CardFormContainer>
        <CardInput 
          type='text'
          formTitle={'Cardholder name'}
          labelId={'card-holder-name'}
          placeHolder={'e.g Jane Appleseed'}
          minLength={2}
          maxLength={40}
          pattern={"^\\D{2,40}"}
          errorMessage={errors.cardHolderNameError}
          onChangeVal={(e) => {
            setCardHolderName(e.target.value.trim())
          }}
          />
        <CardInput 
          type='tel'
          formTitle={'Card number'}
          labelId={'card-number'}
          placeHolder={'e.g 1234 5678 9123 0000'}
          maxLength={19}
          minLength={13}
          pattern={"^(\\d{4,4} ){3,3}\\d{1,4}$"}
          errorMessage={errors.cardNumberError}
          onChangeVal={(e) => {
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
              min={1}
              max={12}
              list='months'
              errorMessage={errors.mmError}
              onChangeVal={(e) => {
                setCardExpMM(e.target.value)
              }}
              />
              <datalist id='months'>
                {months.map((month, i) => <option key={`${i}`} value={month} />)}
              </datalist>
          </div>
          <div>
            <CardInput 
              formTitle={'YY'}
              labelId={'year'}
              placeHolder={'YY'}
              min={new Date().getFullYear() - 2000}
              errorMessage={errors.yyError}
              onChangeVal={(e) => {
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
              maxLength={4}
              pattern={"\\d{3,4}"}
              errorMessage={errors.cvcError}
              onChangeVal={(e) => {
                setCardCvv(e.target.value)
              }}
              />
          </div>
        </div>
        <Button
          type={'submit'}
          buttonText={'Confirm'}
        />
      </CardFormContainer> 
      || formSubmission && 
      <Confirmation
        className={styles['confirmation-container']}
      />}
    </div>
  )
}
