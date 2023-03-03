import React from 'react'
import styles from './card-container.module.scss'
import { CardInfo } from './card.model'

export default function CardContainer({ 
  cardNumber, 
  cardHolderName, 
  cardExpMM, 
  cardExpYY, 
  cardCvv}: CardInfo
  ) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-front']}>
        <img className={styles['card-logo']} src="/public/card-logo.svg" alt="card logo" />
        <p className={styles['card-number']}>
          {!cardNumber ? '0000 0000 0000 0000' : cardNumber}
        </p>
        <div className={styles['holder-info']}>
          <p className={styles['holder-name']}>
            {!cardHolderName ? 'Jane Appleseed' : cardHolderName}
          </p>
          <p className={styles['expiration-date']}>
            {
            `${
              !cardExpMM ? '00' 
              : Number(cardExpMM) < 10 
              ? '0'+cardExpMM 
              : cardExpMM 
            }/${
                !cardExpYY ? '00' 
                : Number(cardExpYY) < 10 
                ? '0'+cardExpYY
                : cardExpYY
              }`
            }
          </p>
        </div>
      </div>
      <div className={styles['card-back']}>
        <p className={styles['card-cvv']}>
          {!cardCvv ? '000' : cardCvv}
        </p>
      </div>
    </div>
  )
}
