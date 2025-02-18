import React from 'react'
import Header from './Header'
import Navbar from './Navbar'

const Banner = () => {
    return (
        <div className='banner'>
            <Header />
            <div className='banner-cont'>
                <h1>Our clothing , your comfort</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.</p>
            </div>
        </div>
    )
}

export default Banner