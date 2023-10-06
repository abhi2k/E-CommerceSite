import React, { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'
import { handleLogout } from '../../CommonFunctions/CommonFunction'
import { Button } from '@mui/material'
import './Header.scss'

export default function Header() {
    const { user, setUser } = useContext(UserContext)

    return (
        <div className='header-component'>
            <div className='site-logo'>Delhivery</div>
            <div className='profile-section'>
                <div className='user-name'>{user}</div>
                <Button className='logout-btn'
                    onClick={() => handleLogout(setUser)}>
                    Logout
                </Button>
            </div>
        </div>
    )
}
