import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { InvalidFieldError } from '../../errors'

export default class EmailValidation implements FieldValidation {
    regex: RegExp
    constructor (readonly field: string) {}
    validate (value: string): Error {
        this.regex = /^([a-zA-Z0-9.%-]+)+@(\w+(\.\w{2,3})+)$/
        if (!value || !this.regex.test(value)) { return new InvalidFieldError() }
        return null
    }
}
