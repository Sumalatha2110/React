import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../images/shopping-cart.png';

const Navbar = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    return (
        <div className='nav-bar'>
            <a href='#'> Home </a>
            <a href='#'> Products </a>
            <div className="cart-icon" onClick={() => navigate('/cart')}>
                <img src={CartIcon} alt="Cart" />
                <span className="cart-count">{cart.length}</span>
            </div>
        </div>
    );
};

export default Navbar;
