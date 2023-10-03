import React from 'react';
import "./Cart.css"

import { useSelector } from 'react-redux';

const CartTotal = () => {
    const cartItems = useSelector((state) => state.cart.items);

    const calculateTotalSum = () => {
        let totalSum = 0;
        cartItems.forEach((item) => {
            totalSum += item.totalPrice;
        });
        return totalSum;
    };

    return (
        <div className="cart-total">
            <h4>Total Sum:</h4>
            <p>${calculateTotalSum().toFixed(2)}</p>
        </div>
    );
};

export default CartTotal;
