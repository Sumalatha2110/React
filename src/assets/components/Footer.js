import React from 'react'
import Header from './Header'

const Footer = () => {
    return (
        <div className='footer d-flex'>
            <div className=' footer-cont col-6'>
                <h3>TREKKING</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className=' footer-menu col-6'>
                <div className='cont'>
                    <p>credits | Privacy |  about | contact</p>
                    <h6>Design by gianluca cosetta</h6>
                </div>
            </div>
        </div>
    )
}

export default Footer