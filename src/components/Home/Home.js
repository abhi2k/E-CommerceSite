import React from 'react'
import './Home.scss'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Dashboard from './Dashboard/Dashboard'
import Footer from './Footer/Footer'

export default function Home() {

  return (
    <div className='home-page'>
      <Header />
      <div className='navigation-dashboard'>
        <Navigation />
        <Dashboard />
      </div>
      <Footer />
    </div>
  )
}
