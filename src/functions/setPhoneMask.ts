import { maskPhoneNumbersFormats } from '../constants'

/**
 * Masks a phone number.
 * @param number - The phone number to be masked.
 * @returns A string containing the masked phone number.
 */
export const setPhoneMask = (number: string) => {
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
