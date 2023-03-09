const currentYear = new Date().getFullYear() - 2000

export function errorMessages() {
  return {
    cardHolderNameError() {
      return 'Enter your name as it appears in your card'
    },
    cardNumberError() {
      return 'Enter a valid 16 digit number'
    },
    mmError() {
      return 'Enter a valid month between 1 and 12'
    },
    yyError() {
      return `Enter a valid year equal or greater than ${currentYear}`
    },
    cvcError() {
      return 'Enter a valid 3 digit CVC'
    }
  }
}