import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Header from './Header/Header'

export default function Home() {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      <Header user={user} setUser={setUser} />
    </div>
  )
}
