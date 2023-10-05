import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.medicineName}, {item.price}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
