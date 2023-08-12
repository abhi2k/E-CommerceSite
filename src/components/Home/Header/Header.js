import React from 'react'
import { handleLogout } from '../../CommonFunctions/CommonFunction'
import { Button } from '@mui/material'

export default function Header({ user,setUser }) {
    return (
        <div>
            <div className='user-name'>{user}</div>
            <Button className='logout-btn'
                onClick={() => handleLogout(setUser)}>
                Logout
            </Button>
        </div>
    )
}
