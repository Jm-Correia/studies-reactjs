/* eslint-disable space-before-function-paren */
import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import { Validation } from '../../protocols/validation'
import fake from 'faker'

type SutTypes = {
    sut: RenderResult
    validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
    errorMessage = 'Required field'
    fieldName: string
    fieldValue: string

    validate(fieldName: string, fieldValue: string): string {
        this.fieldName = fieldName
        this.fieldValue = fieldValue
        return this.errorMessage
    }
}

const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    const sut = render(<Login validation={validationSpy} />)
    return {
        sut,
        validationSpy
    }
}

describe('Login Component', () => {
    afterEach(cleanup)

    it('Should start with initial state', () => {
        const { getByTestId } = makeSut().sut
        const errorWrap = getByTestId('error-wrap')
        expect(errorWrap.childElementCount).toBe(0)
        const button = getByTestId('submit') as HTMLButtonElement
        expect(button.disabled).toBe(true)
    })
    it('Should inputs start with message Error', () => {
        const { getByTestId } = makeSut().sut

        const emailStatus = getByTestId('email-status')
        expect(emailStatus.title).toBe('Required field')
        const passwordstatus = getByTestId('password-status')
        expect(passwordstatus.title).toBe('Required field')
    })
    it('Should icons start with red color', () => {
        const { getByTestId } = makeSut().sut
        const emailStatus = getByTestId('email-status')

        expect(emailStatus.outerHTML).toContain('email-svg')
        expect(emailStatus.outerHTML).toContain('#791500')

        const passwordstatus = getByTestId('password-status')
        expect(passwordstatus.outerHTML).toContain('password-svg')
        expect(passwordstatus.outerHTML).toContain('#791500')
    })

    it('Should Show email error is Validation fails', () => {
        const { sut, validationSpy } = makeSut()
        const errorMessage = fake.random.words()
        validationSpy.errorMessage = errorMessage
        const email = sut.getByTestId('email')
        fireEvent.input(email, { target: { value: fake.internet.email() } })
        const emailStatus = sut.getByTestId('email-status')
        expect(emailStatus.title).toBe(errorMessage)
        expect(emailStatus.outerHTML).toContain('#791500')
    })
    it('Should Show password error is Validation fails', () => {
        const { sut, validationSpy } = makeSut()
        const errorMessage = fake.random.words()
        validationSpy.errorMessage = errorMessage
        const password = sut.getByTestId('password')
        fireEvent.input(password, { target: { value: fake.internet.password() } })
        const passwordStatus = sut.getByTestId('password-status')
        expect(passwordStatus.title).toBe(errorMessage)
        expect(passwordStatus.outerHTML).toContain('#791500')
    })
    it('Should not message with password is Validation', () => {
        const { sut, validationSpy } = makeSut()
        const errorMessage = ''
        validationSpy.errorMessage = errorMessage
        const password = sut.getByTestId('password')
        fireEvent.input(password, { target: { value: fake.internet.password() } })
        const passwordStatus = sut.getByTestId('password-status')
        expect(passwordStatus.title).toBe(errorMessage)
        expect(passwordStatus.outerHTML).toContain('#1d5530')
    })
    it('Should enable button is form is valid', () => {
        const { sut, validationSpy } = makeSut()
        const errorMessage = ''
        validationSpy.errorMessage = errorMessage
        const password = sut.getByTestId('password')
        const email = sut.getByTestId('email')
        fireEvent.input(password, { target: { value: fake.internet.password() } })
        fireEvent.input(email, { target: { value: fake.internet.email() } })
        const button = sut.getByTestId('submit') as HTMLButtonElement
        expect(button.disabled).toBe(false)
    })
})
