import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="cartImage" />
                            <div>
                                <h2>{item.title}</h2>
                                <p>${item.price}</p>
                            </div>
                            <div className="quantity-controls">
                                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
            <button className="continue-shopping" onClick={() => navigate('/')}>Continue Shopping</button>
        </div>
    );
};

export default Cart;
