import React from 'react'
import Styles from './login-styles.scss'

import { Header, Footer, Input, Status } from '../../components/'

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <Header />
            <form className={Styles.form}>
                <h2>Login</h2>
                <Input placeholder="Typing you e-mail"
                    id="email" name="email" type="email" />

                <Input placeholder="Typing you password" id="password"
                    name="password" type="password" />

                <button type="submit">Sign in</button>
                <span className={Styles.link}>Create your account</span>
                <Status />
            </form>
            <Footer />
        </div>
    )
}

export default Login
