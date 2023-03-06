import React from 'react';
import './Shop.css';
import { useState, useEffect } from 'react';
import Product from '../product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
        }, []);
    const buttonHandle = (product)=>{
        const newCart=[...cart,product];
        setCart(newCart);
    }
    return (
        <div className = 'shop-container' >
            <div className = 'product-container' >
                <div className = 'product-div' > {
                    products.map(product => <Product key = { product.id }
                        product = { product } 
                        buttonHandle = {buttonHandle}>
                        </Product>)
                    }
                </div>
            </div>
            <div className = 'cart-container' >
                <Cart cart={cart}></Cart>
            </div>
        </div>

        );
    };

export default Shop;