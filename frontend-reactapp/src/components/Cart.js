import React from 'react';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.book.id}>
                        <h3>{item.book.title}</h3>
                        <p>{item.book.author}</p>
                        <p>${item.book.price}</p>
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.book, e.target.value)}
                        />
                        <button onClick={() => removeFromCart(item.book)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h3>Total: ${cart.reduce((total, item) => total + item.book.price * item.quantity, 0)}</h3>
            </div>
        </div>
    );
};

export default Cart;