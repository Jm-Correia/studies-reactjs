import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Input from './input'
import Context from '../../context/form/form-context'

describe('Input Component', () => {
    it('Should begin with readOnly', () => {
        const { getByTestId } = render(
            <Context.Provider value={{ state: {} }}>
                <Input name="field" />
            </Context.Provider>
        )
        const input = getByTestId('field') as HTMLInputElement
        expect(input.readOnly).toBe(true)
    })
    it('Should remove readOnly on focus', () => {
        const { getByTestId } = render(
            <Context.Provider value={{ state: {} }}>
                <Input name="field" />
            </Context.Provider>
        )
        const input = getByTestId('field') as HTMLInputElement
        fireEvent.focus(input)
        expect(input.readOnly).toBe(false)
    })
})
