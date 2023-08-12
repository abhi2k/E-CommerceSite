import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginComponent from './components/LoginComponent/LoginComponent'
import Home from './components/Home/Home'
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
