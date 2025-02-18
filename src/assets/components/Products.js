import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';


const Products = () => {
    const [products, setProducts] = useState([]);
    const { cart, addToCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                setProducts(response.data);
            })
    }, []);
    return (
        <div className="products">
            <h1>PRODUCTS</h1>
            <div className="product">
                {products.map((product) => (
                    <div key={product.id} className="items">
                        <div>
                            <img src={product.image} alt={product.title} className="productImage" />
                        </div>
                        <div className='card-cont'>
                            <h2>{product.title}</h2>
                            <p>${product.price}</p>
                        </div>
                        <div>
                            <button className="add" onClick={() => addToCart(product)}>add</button>
                            <button className="buy" onClick={() => navigate(`/product/${product.id}`, { state: { product } })}>Buy Now </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;