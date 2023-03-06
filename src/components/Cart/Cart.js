import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h1 className='cart-title'>Order Summary</h1>
            <p>Selected items:{cart.length}</p>
            <p>Selected items list:{cart}</p> 
        </div>
    );
};

export default Cart;