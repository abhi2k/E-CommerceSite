import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginComponent from './pages/Login/LoginComponent'
import Home from './pages/Home/Home'
import { UserContext } from './context/UserContext'

export default function Dashboard() {
    const { user } = useContext(UserContext)
    return (
        <BrowserRouter>
            <LoginComponent>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            </LoginComponent>
        </BrowserRouter>
    )
}
