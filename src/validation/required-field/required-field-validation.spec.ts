import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '../errors'
import faker from 'faker'

describe('RequiredFieldValidation', () => {
    it('Should return error is field is empty', () => {
        const sut = new RequiredFieldValidation('email')
        const error = new RequiredFieldError()
        expect(sut.validade('')).toEqual(error)
    })

    it('Should return falsy is field is not empty', () => {
        const sut = new RequiredFieldValidation('email')
        expect(sut.validade(faker.random.word())).toBeFalsy()
    })
})
