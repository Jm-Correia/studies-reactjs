import { FieldValidation } from '../protocols/fieldValidation'
import { RequiredFieldError } from '../errors/'

export class RequiredFieldValidation implements FieldValidation {
    constructor (readonly field: string) {}
    validade (value: string): Error {
        if (value) return null
        return new RequiredFieldError()
    }
}
