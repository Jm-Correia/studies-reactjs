import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'

import { Header, Footer, Input, Status } from '../../components/'

import Context from '../../context/form/form-context'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usescases/authentication'
import { Link, useHistory } from 'react-router-dom'

type Props = {
    validation: Validation
    authentication: Authentication
}

const Login: React.FC<Props> = ({ validation, authentication }: Props) => {
    const history = useHistory()
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        errorMessage: '',
        emailError: '',
        passwordError: ''
    })

    useEffect(() => {
        setState({
            ...state,
            emailError: validation.validate('email', state.email),
            passwordError: validation.validate('password', state.password)
        })
    }, [state.email, state.password])

    const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        try {
            if (state.isLoading || state.emailError || state.passwordError) return
            setState({
                ...state,
                isLoading: true
            })
            const account = await authentication.auth({
                email: state.email,
                password: state.password
            })
            localStorage.setItem('accessToken', account.acessToken)
            history.replace('/')
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                errorMessage: error.message
            })
        }
    }

    return (
        <div className={Styles.login}>
            <Header />
            <Context.Provider value={{ state, setState }}>
                <form data-testid='form' className={Styles.form} onSubmit={handlerSubmit}>
                    <h2>Login</h2>
                    <Input placeholder="Typing you e-mail"
                        id="email" name="email" type="email" />

                    <Input placeholder="Typing you password" id="password"
                        name="password" type="password" />

                    <button data-testid='submit' disabled={!!state.emailError || !!state.passwordError} type="submit" className={Styles.submit}>Sign in</button>
                    <Link data-testid='create-account' to='/signup' className={Styles.link}>Create your account</Link>
                    <Status />
                </form>
            </Context.Provider>
            <Footer />
        </div>
    )
}

export default Login
