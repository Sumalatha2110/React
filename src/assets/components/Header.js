import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='header d-flex'>
            <Logo />
            <Navbar />
        </div>
    )
}

export default Header