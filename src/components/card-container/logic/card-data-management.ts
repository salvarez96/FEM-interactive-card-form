export function manageCardNumberData(cardNumber: string) {
  const cardNumberArr = cardNumber.split('')
  cardNumberArr.splice(4, 0, ' ')
  cardNumberArr.splice(9, 0, ' ')
  cardNumberArr.splice(14, 0, ' ')
  return cardNumberArr.join('')
}

export function manageExpDateData(expDate: string) {
  if (!expDate) {
    return '00'
  } else if (Number(expDate) < 10) {
    return `0${expDate}`
  }
  return expDate
}