import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Component', () => {
    it('Should start with initial state', () => {
        const { getByTestId } = render(<Login />)
        const errorWrap = getByTestId('error-wrap')
        expect(errorWrap.childElementCount).toBe(0)
        const button = getByTestId('submit') as HTMLButtonElement
        expect(button.disabled).toBe(true)
    })
    it('Should inputs start with message Error', () => {
        const { getByTestId } = render(<Login />)

        const emailStatus = getByTestId('email-status')
        expect(emailStatus.title).toBe('Required field')
        const passwordstatus = getByTestId('password-status')
        expect(passwordstatus.title).toBe('Required field')
    })
    it('Should icons start with red color', () => {
        const { getByTestId } = render(<Login />)
        const emailStatus = getByTestId('email-status')

        expect(emailStatus.outerHTML).toContain('email-svg')
        expect(emailStatus.outerHTML).toContain('#791500')

        const passwordstatus = getByTestId('password-status')
        expect(passwordstatus.outerHTML).toContain('password-svg')
        expect(passwordstatus.outerHTML).toContain('#791500')
    })
})
