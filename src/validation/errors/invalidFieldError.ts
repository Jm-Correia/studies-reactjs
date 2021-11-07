export default class InvalidFieldError extends Error {
    constructor () {
        super('Invalid Field')
        this.name = 'InvalidFieldError'
        this.message = 'Invalid Field'
    }
}
