/**
 * Generates a random code of a specific length.
 * @param length - The length of the code to be generated.
 * @returns A string containing the generated code.
 */
export const genRandomStrCode = (length: number) => {
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let token = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    token += characters[randomIndex]
  }

  return token
}
