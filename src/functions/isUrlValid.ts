export interface ValidateUrlOptions {
  protocols?: ('http' | 'https')[]
  allowIp?: boolean
}

/**
 * Validates an URL.
 * @param url - The URL to be validated.
 * @param options - An object containing the options for the validation.
 * @param options.protocols - An array containing the allowed protocols.
 * @param options.allowIp - A boolean indicating if IP addresses are allowed.
 * @returns A boolean indicating if the URL is valid.
 */

export const isUrlValid = (url: string, options: ValidateUrlOptions = {}) => {
  const { protocols = ['http', 'https'], allowIp = true } = options

  const protocolPattern = `(${protocols.join('|')}):\\/\\/`
  const domainPattern = '(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}'
  const ipPattern = allowIp ? '((\\d{1,3}\\.){3}\\d{1,3})' : ''
  const portPattern = '(\\:\\d+)?'
  const pathPattern = '(\\/[-a-z\\d%_.~+]*)*'
  const queryPattern = '(\\?[;&a-z\\d%_.~+=-]*)?'

  const rgxUrl = new RegExp(
    `^${protocolPattern}(${domainPattern}|${ipPattern})${portPattern}${pathPattern}${queryPattern}$`
  )

  return rgxUrl.test(url)
}
