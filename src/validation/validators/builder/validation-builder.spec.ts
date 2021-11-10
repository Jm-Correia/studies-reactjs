import ValidationBuilder from './validation-builder'
import EmailValidation from '../email/emailValidation'
import MinLenghValidation from '../min-length/minLengthValidation'
import RequiredFieldValidation from '../required-field/required-field-validation'

describe('ValidationBuilder', () => {
    it('Should return RequiredFieldValidation', () => {
        const validations = ValidationBuilder.field('any_field').required().build()
        expect(validations).toHaveLength(1)
        expect(validations).toEqual([new RequiredFieldValidation('any_field')])
    })

    it('Should return EmailValidation', () => {
        const validations = ValidationBuilder.field('email').email().build()
        expect(validations).toHaveLength(1)
        expect(validations).toEqual([new EmailValidation('email')])
    })
    it('Should return MinLenghValidation', () => {
        const validations = ValidationBuilder.field('email').min(3).build()
        expect(validations).toHaveLength(1)
        expect(validations).toEqual([new MinLenghValidation('email', 3)])
    })

    it('Should return list of validations', () => {
        const validations = ValidationBuilder.field('email').required().min(3).email().build()
        expect(validations).toHaveLength(3)
        expect(validations).toEqual([
            new RequiredFieldValidation('email'),
            new MinLenghValidation('email', 3),
            new EmailValidation('email')
        ])
    })
})
