/**
 * Validates an email address.
 * @param email - The email address to be validated.
 * @returns A boolean indicating if the email is valid.
 */
export const isEmailValid = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  const isValid = emailRegex.test(email)
  return isValid
}
