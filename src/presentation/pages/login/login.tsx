import React, { useState } from 'react'
import Styles from './login-styles.scss'

import { Header, Footer, Input, Status } from '../../components/'

import Context from '../../context/form/form-context'

const Login: React.FC = () => {
    const [state] = useState({
        isLoading: false,
        errorMessage: '',
        emailError: 'Required field',
        passwordError: 'Required field'
    })

    return (
        <div className={Styles.login}>
            <Header />
            <Context.Provider value={state}>
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
