import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { InvalidFieldError } from '../../errors'

export default class EmailValidation implements FieldValidation {
    regex: RegExp
    constructor (readonly field: string) {}
    validate (value: string): Error {
        value = value.toLowerCase()
        this.regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (value && !this.regex.test(value)) {
            return new InvalidFieldError()
        }
        return null
    }
}
