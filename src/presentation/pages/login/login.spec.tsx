/* eslint-disable space-before-function-paren */
import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import { Validation } from '../../protocols/validation'

type SutTypes = {
    sut: RenderResult
    validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
    errorMessage: string
    input = {
        fieldName: '',
        fieldValue: ''
    }

    validate(fieldName: string, fieldValue: string): string {
        this.input.fieldName = fieldName
        this.input.fieldValue = fieldValue
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

    it('Should call Validation with correct email', () => {
        const { sut, validationSpy } = makeSut()
        const email = sut.getByTestId('email')
        fireEvent.input(email, { target: { value: 'any_email' } })
        expect(validationSpy.input).toEqual({
            fieldName: 'email',
            fieldValue: 'any_email'
        })
    })
    it('Should call Validation with correct password', () => {
        const { sut, validationSpy } = makeSut()
        const password = sut.getByTestId('password')
        fireEvent.input(password, { target: { value: 'any_password' } })
        expect(validationSpy.input).toEqual({
            fieldName: 'password',
            fieldValue: 'any_password'
        })
    })
})
