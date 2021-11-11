export class InvalidCredentialError extends Error {
  constructor () {
    super('Invalid Credential')
    this.name = 'InvalidCredentialError'
    this.message = 'Invalid Credential'
  }
}
