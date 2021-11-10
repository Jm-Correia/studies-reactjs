import { FieldValidation } from '@/validation/protocols/fieldValidation'
import { EmailValidation, RequiredFieldValidation, MinLenghValidation } from '../'

export default class ValidationBuilder {
    private constructor (
        private readonly fieldName: string,
        private readonly validations: FieldValidation[]
        ) {}

    static field (fieldName: string): ValidationBuilder {
       return new ValidationBuilder(fieldName, [])
    }

    required (): ValidationBuilder {
        this.validations.push(new RequiredFieldValidation(this.fieldName))
        return this
    }

    min (min: number): ValidationBuilder {
        this.validations.push(new MinLenghValidation(this.fieldName, min))
        return this
    }

    email (): ValidationBuilder {
        this.validations.push(new EmailValidation(this.fieldName))
        return this
    }

    build (): FieldValidation[] {
        return this.validations
    }
}
