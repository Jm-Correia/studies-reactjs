import { InvalidFieldError } from '@/validation/errors'
import { FieldValidation } from '@/validation/protocols/fieldValidation'

export default class MinLenghValidation implements FieldValidation {
    constructor (readonly field: string, private readonly minLength: number) {}
    validate (value: string): Error {
        if (!value || value.length < this.minLength) return new InvalidFieldError()
        return null
    }
}
