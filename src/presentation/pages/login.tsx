import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '../components/spinner/spinner'
import Logo from '../components/logo/logo'

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <header className={Styles.header}>
                <Logo />
                <h1>MCAF - Multicutural Association Fredericton INC.</h1>
            </header>
            <form className={Styles.form}>
                <h2>Login</h2>
                <div className={Styles.inputWrap}>
                    <input type="email" name="email" id="Typing your e-mail" />
                    <span className={Styles.status}>*</span>
                </div>
                <div className={Styles.inputWrap}>
                    <input type="password" name="password" id="Typing your password" />
                    <span className={Styles.status}>*</span>
                </div>
                <button type="submit">Sign in</button>
                <span className={Styles.link}>Create your account</span>
                <div className={Styles.errorWrap}>
                    <Spinner className={Styles.spinner} />
                    <span className={Styles.error}>
                        Error
                    </span>
                </div>
            </form>
            <footer className={Styles.footer}>
                <span>© All rights reserved. Multicultural Association of Fredericton Inc. 2021</span>
            </footer>
        </div>
    )
}

export default Login
