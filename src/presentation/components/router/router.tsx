import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import { Login } from '../../pages'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
