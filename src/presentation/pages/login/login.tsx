import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'

import { Header, Footer, Input, Status } from '../../components/'

import Context from '../../context/form/form-context'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
    validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        errorMessage: '',
        emailError: 'Required field',
        passwordError: 'Required field'
    })

    useEffect(() => {
        validation.validate({ email: state.email })
    }, [state.email])

    useEffect(() => {
        validation.validate({ password: state.password })
    }, [state.password])

    return (
        <div className={Styles.login}>
            <Header />
            <Context.Provider value={{ state, setState }}>
                <form className={Styles.form}>
                    <h2>Login</h2>
                    <Input placeholder="Typing you e-mail"
                        id="email" name="email" type="email" />

                    <Input placeholder="Typing you password" id="password"
                        name="password" type="password" />

                    <button data-testid='submit' disabled type="submit" className={Styles.submit}>Sign in</button>
                    <span className={Styles.link}>Create your account</span>
                    <Status />
                </form>
            </Context.Provider>
            <Footer />
        </div>
    )
}

export default Login
