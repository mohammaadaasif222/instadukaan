import React, { useContext } from 'react';
import cartStore from '../stores/CartStore';

const ShoppingCart = () => {
  const store = useContext(cartStore);

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {store.cartItems.map((item, index) => (
          <li key={index}>{item.title} - {item.desc}</li>
        ))}
      </ul>
      <h3>Total Items: {store.cartItems.length}</h3>
    </div>
  );
};

export default ShoppingCart;
