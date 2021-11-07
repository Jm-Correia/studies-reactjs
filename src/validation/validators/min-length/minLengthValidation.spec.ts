import { InvalidFieldError } from '@/validation/errors'
import MinLenghValidation from './minLengthValidation'
import faker from 'faker'

const makeSut = (minlenght: number): MinLenghValidation => new MinLenghValidation(faker.database.column(), minlenght)

describe('MinLengthValidation', () => {
    it('Should return error is value is invalid', () => {
        const sut = makeSut(5)
        expect(sut.validate(faker.random.alphaNumeric(4))).toEqual(new InvalidFieldError())
    })

    it('Should return falst is value is valid', () => {
        const sut = makeSut(5)
        expect(sut.validate(faker.random.alphaNumeric(5))).toBeFalsy()
    })
})
