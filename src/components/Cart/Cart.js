import React from 'react';
import './cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping =0;
    let grand_total = 0;
    for(const product of cart){
        total = total+product.price;
        shipping=shipping+product.shipping;
        grand_total=total+shipping;
    }
    return (
        <div className='cart'>
            <h1 className='cart-title'>Order Summary</h1>
            <p>Selected items:{cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <h3>Grand total: ${grand_total}</h3>


        </div>
    );
};

export default Cart;