import styles from './card-container.module.scss'
import { CardInfo } from './card.model'
import { manageCardNumberData, manageExpDateData } from './logic/card-data-management'

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
