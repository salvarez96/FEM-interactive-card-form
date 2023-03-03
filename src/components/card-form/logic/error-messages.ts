export function errorMessages() {
  return {
    cardHolderNameError() {
      return 'Enter your name as it appears in your card'
    },
    cardNumberError() {
      return 'Enter a valid 16 digit number'
    },
    mmError() {
      return 'Enter a valid month'
    },
    yyError() {
      return 'Enter a valid year equal or greater than the current year'
    },
    cvcError() {
      return 'Enter a valid 3 digit CVC'
    }
  }
}