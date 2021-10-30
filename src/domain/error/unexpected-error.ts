export class UnexpectedError extends Error {
  constructor () {
    super('Something wrong happened, please try again in a few minutes')
    this.name = 'UnexpectedError'
  }
}
