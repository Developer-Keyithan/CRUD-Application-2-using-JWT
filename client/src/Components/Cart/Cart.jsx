import React from 'react';
import './Cart.css';

const Cart = ({ data }) => {
    if (!data) return null;
    console.log(data)
    return (
        <div className="cart">
          <p>User ID: {data._id}</p>
            <p>name: {data.userName || "Unknown"}</p>
            <p>Email: {data.email}</p>
        </div>
    );
};

export default Cart;