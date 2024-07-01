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

export { isCpfOrCnpjValid, genRandomStrCode }
