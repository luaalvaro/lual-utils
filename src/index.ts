import { maskPhoneNumbersFormats } from './constants'

/**
 * Checks if a CPF or CNPJ is valid.
 * @param documentNumber - The document number to be validated. Can be a CPF or CNPJ.
 * @returns A boolean indicating if the document is valid.
 */
const isCpfOrCnpjValid = (documentNumber: string) => {
  documentNumber = documentNumber.replace(/\D/g, '')

  if (documentNumber.length === 11) {
    if (/^(\d)\1+$/.test(documentNumber)) {
      return false
    }

    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += parseInt(documentNumber.charAt(i)) * (10 - i)
    }
    let rest = 11 - (sum % 11)
    let verifyingDigit = rest === 10 || rest === 11 ? 0 : rest
    if (verifyingDigit !== parseInt(documentNumber.charAt(9))) {
      return false
    }

    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += parseInt(documentNumber.charAt(i)) * (11 - i)
    }
    rest = 11 - (sum % 11)
    verifyingDigit = rest === 10 || rest === 11 ? 0 : rest
    if (verifyingDigit !== parseInt(documentNumber.charAt(10))) {
      return false
    }

    return true
  }

  if (documentNumber.length === 14) {
    if (
      documentNumber == '00000000000000' ||
      documentNumber == '11111111111111' ||
      documentNumber == '22222222222222' ||
      documentNumber == '33333333333333' ||
      documentNumber == '44444444444444' ||
      documentNumber == '55555555555555' ||
      documentNumber == '66666666666666' ||
      documentNumber == '77777777777777' ||
      documentNumber == '88888888888888' ||
      documentNumber == '99999999999999'
    )
      return false

    let docLength = documentNumber.length - 2
    let docNumbers = documentNumber.substring(0, docLength)
    let docDigits = documentNumber.substring(docLength)
    let sum = 0
    let pos = docLength - 7
    for (let i = docLength; i >= 1; i--) {
      sum += Number(docNumbers.charAt(docLength - i)) * pos--
      if (pos < 2) pos = 9
    }
    let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    if (result != Number(docDigits.charAt(0))) return false

    docLength = docLength + 1
    docNumbers = documentNumber.substring(0, docLength)
    sum = 0
    pos = docLength - 7
    for (let i = docLength; i >= 1; i--) {
      sum += Number(docNumbers.charAt(docLength - i)) * pos--
      if (pos < 2) pos = 9
    }
    result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
    if (result != Number(docDigits.charAt(1))) return false

    return true
  }
}

/**
 * Generates a random code of a specific length.
 * @param length - The length of the code to be generated.
 * @returns A string containing the generated code.
 */
const genRandomStrCode = (length: number) => {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let token = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    token += characters[randomIndex]
  }

  return token
}

/**
 * Validates an email address.
 * @param email - The email address to be validated.
 * @returns A boolean indicating if the email is valid.
 */
const isEmailValid = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const isValid = emailRegex.test(email)
  return isValid
}

/**
 * Masks a phone number.
 * @param number - The phone number to be masked.
 * @returns A string containing the masked phone number.
 */
const setPhoneMask = (number: string) => {
  number = number.replace(/\D/g, '')

  const defaultFormat = (number: string) => {
    const DDI = number.slice(0, 2)
    const DDD = number.slice(2, 4)
    const part1 = number.slice(4, 7)
    const part2 = number.length <= 11 ? number.slice(7) : number.slice(7, 11)
    const part3 = number.length > 11 ? number.slice(11) : ''
    return `+${DDI} ${DDD} ${part1} ${part2} ${part3}`
  }

  for (const prefix in maskPhoneNumbersFormats) {
    if (number.startsWith(prefix)) {
      return maskPhoneNumbersFormats[prefix](number)
    }
  }

  return defaultFormat(number)
}

export { isCpfOrCnpjValid, genRandomStrCode, isEmailValid, setPhoneMask }
