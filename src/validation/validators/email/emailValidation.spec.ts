import faker from 'faker'
import EmailValidation from './emailValidation'
import { InvalidFieldError } from '../../errors'

const makeSut = (): EmailValidation => new EmailValidation(faker.random.word())

describe('EmailValidation', () => {
    it('Should return error if email is invalid', () => {
        const sut = makeSut()
        const error = sut.validate(faker.random.word())
        expect(error).toEqual(new InvalidFieldError())
    })
    it('Should return falsy if email is valid', () => {
        const sut = makeSut()
        expect(sut.validate(faker.internet.email())).toBeFalsy()
    })
})
