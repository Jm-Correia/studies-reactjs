import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import { Login } from '../../pages'

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
