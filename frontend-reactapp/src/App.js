import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import BookList from './components/BookList';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart(prevCart => {
            const item = prevCart.find(item => item.book.id === book.id);
            if (item) {
                return prevCart.map(item =>
                    item.book.id === book.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { book, quantity: 1 }];
            }
        });
    };

    const updateQuantity = (book, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.book.id === book.id
                    ? { ...item, quantity: parseInt(quantity) }
                    : item
            )
        );
    };

    const removeFromCart = (book) => {
        setCart(prevCart => prevCart.filter(item => item.book.id !== book.id));
    };

    return (
        <div className="container">
            <h1>Online Bookstore</h1>
            <BookList addToCart={addToCart} />
            <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        </div>
    );
};

export default App;