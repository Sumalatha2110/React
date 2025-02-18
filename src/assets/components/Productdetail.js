import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from './CartContext';


const ProductDetails = () => {
    const location = useLocation();
    const product = location.state?.product;
    const { cart, addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => prev - 1);


    return (
        <div className="productdetail d-flex row">
            <div className="product-img col-6">
                <img src={product.image} alt={product.title} />
            </div>
            <div className='product-cont col-6'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p><strong>{product.category}</strong></p>
                <p className="productPrice">Price: ${product.price}</p>
                <div className="action">
                    <button onClick={decrement} disabled={quantity <= 1}>-</button>
                    <input value={quantity} />
                    <button onClick={increment}>+</button>
                </div>
                <button className="add" onClick={() => addToCart(product)} disabled={cart.find((item) => item.id === product.id)}>{cart.find((item) => item.id === product.id) ? 'Added' : 'Add to Cart'}</button>
            </div>
        </div >
    );
};

export default ProductDetails;