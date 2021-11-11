import React from 'react'
import Login from '@/presentation/pages/login/login'
import { RemoteAuthentication } from '@/data/usercases/authenticarion/remote-authentication'
import { AxiosHttpClient } from '@/infra/http/axios-http-client/axios-http-client'
import ValidationComposite from '@/validation/validators/validation-composite/validation-composite'
import Builder from '@/validation/validators/builder/validation-builder'

export const makeLogin: React.FC = () => {
    const url = 'https://fordevs.herokuapp.com/api/login'
    const axiosHttpClient = new AxiosHttpClient()
    const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
    const validationComposite = new ValidationComposite([
        ...Builder.field('email').required().email().build(),
        ...Builder.field('password').required().min(5).build()
    ])
    return (
        <Login
            authentication={remoteAuthentication}
            validation={validationComposite}
        />
    )
}
