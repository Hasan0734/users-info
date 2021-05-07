import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const salary = props.salary
    return (
        <div>
            <h1>Total User Added: {cart.length}</h1>
            <h1><small>Total Salary: ${salary}</small></h1>
        </div>
    );
};

export default Cart;