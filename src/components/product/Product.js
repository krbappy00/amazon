import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    const {name,price,img,seller,ratings} =props.product;
    return (
        <div className='product-cart'>
            <img src={img}alt=''></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price:${price}</p>
                <p className='seller-name'><small>Brand: {seller}</small></p>
                <p className='seller-ratings'><small>Ratings: {ratings}*</small></p>
            </div>
            <button onClick={()=> props.buttonHandle(props.product)} className='button'>Add to cart
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;