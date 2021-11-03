import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '../components/spinner/spinner'

import LoginHeader from '../components/login-header/login-header'
import Footer from '../components/footer/footer'
import Input from '../components/input/input'

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <LoginHeader />
            <form className={Styles.form}>
                <h2>Login</h2>
                <Input placeholder="Typing you e-mail"
                    id="email" name="email" type="email" />

                <Input placeholder="Typing you password" id="password"
                    name="password" type="password" />

                <button type="submit">Sign in</button>
                <span className={Styles.link}>Create your account</span>
                <div className={Styles.errorWrap}>
                    <Spinner className={Styles.spinner} />
                    <span className={Styles.error}>
                        Error
                    </span>
                </div>
            </form>
            <Footer />
        </div>
    )
}

export default Login
