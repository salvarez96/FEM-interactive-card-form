import React from 'react'
import styles from './card-container.module.scss'
import { CardInfo } from './card.model'

export default function CardContainer({ cardNumber, cardHolderName, cardExpDate, cardCvv}: CardInfo) {
  return (
    <div className={styles['card-container']}>
      <div className={styles['card-front']}>
        <img className={styles['card-logo']} src="/public/card-logo.svg" alt="card logo" />
        <p className={styles['card-number']}>{cardNumber ?? '0000 0000 0000 0000'}</p>
        <div className={styles['holder-info']}>
          <p className={styles['holder-name']}>
            {cardHolderName ?? 'Jane Appleseed'}
          </p>
          <p className={styles['expiration-date']}>
            {cardExpDate ?? '00/00'}
          </p>
        </div>
      </div>
      <div className={styles['card-back']}>
        <p className={styles['card-cvv']}>{cardCvv ?? '000'}</p>
      </div>
    </div>
  )
}
