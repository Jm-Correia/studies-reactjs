import { RequiredFieldValidation } from './required-field-validation'
import { RequiredFieldError } from '../../errors'
import faker from 'faker'

const makeSut = (): RequiredFieldValidation => new RequiredFieldValidation(faker.database.column())

describe('RequiredFieldValidation', () => {
    it('Should return error is field is empty', () => {
        const sut = makeSut()
        const error = new RequiredFieldError()
        expect(sut.validate('')).toEqual(error)
    })

    it('Should return falsy is field is not empty', () => {
        const sut = makeSut()
        expect(sut.validate(faker.random.word())).toBeFalsy()
    })
})
