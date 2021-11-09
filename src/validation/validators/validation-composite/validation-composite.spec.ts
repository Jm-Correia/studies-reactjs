import faker from 'faker'
import EmailValidation from '../email/emailValidation'
import MinLengthValidation from '../min-length/minLengthValidation'
import ValidationComposite from './validation-composite'

const makeSut = (): ValidationComposite => {
    return new ValidationComposite([
        new EmailValidation('email'),
        new MinLengthValidation('login', 3)
    ])
}

describe('ValidationComposite', () => {
    it('Should return error if any validation fails', () => {
        const sut = makeSut()
        let error = ''
        error = sut.validate('login', '')
        error = sut.validate('email', 'error')
        expect(error).toEqual('Invalid Field')
        expect(error).toBe('Invalid Field')
    })
    it('Should return falsy if validations on success', () => {
        const sut = makeSut()
        let error = sut.validate('login', faker.random.alphaNumeric(5))
        error = sut.validate('email', '')
        expect(error).toBeFalsy()
    })
})
