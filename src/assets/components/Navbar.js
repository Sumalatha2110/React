import React from 'react';
import { useCart } from './CartContext';
import Cart from '../images/shopping-cart.png';

const Navbar = () => {
    const { cart } = useCart();

    return (
        <div className='nav-bar'>
            <a href='#'> Home </a>
            <a href='#'> Products </a>
            <img src={Cart} alt="Cart" />
            <span>{cart.length}</span>
        </div>
    );
};

export default Navbar;