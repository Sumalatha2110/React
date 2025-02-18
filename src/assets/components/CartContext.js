import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add item to cart (or increase quantity if already in cart)
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    // Increase quantity
    const increaseQuantity = (id) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Decrease quantity (remove if quantity becomes 0)
    const decreaseQuantity = (id) => {
        setCart(cart.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
