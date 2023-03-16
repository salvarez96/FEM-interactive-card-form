import { useContext } from 'react'
import { CardInfoGlobalContext } from '../../context/card-info-context'
import styles from './card-container.module.scss'
import { manageCardNumberData, manageExpDateData } from './logic/card-data-management'

export default function CardContainer() {

  const {
    cardHolderName,
    cardNumber,
    cardExpMM,
    cardExpYY,
    cardCvv
  } = useContext(CardInfoGlobalContext)

  return (
    <div className={styles['card-container']}>
      <div className={styles['card-front']}>
        <img className={styles['card-logo']} src="./card-logo.svg" alt="card logo" />
        <p className={styles['card-number']}>
          {
            !cardNumber 
            ? '0000 0000 0000 0000' 
            : manageCardNumberData(cardNumber)
          }
        </p>
        <div className={styles['holder-info']}>
          <p className={styles['holder-name']}>
            {!cardHolderName ? 'Jane Appleseed' : cardHolderName}
          </p>
          <p className={styles['expiration-date']}>
            {`${manageExpDateData(cardExpMM)}/${manageExpDateData(cardExpYY)}`}
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
