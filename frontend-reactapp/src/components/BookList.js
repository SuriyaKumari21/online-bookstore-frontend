import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = ({ addToCart }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the books!', error);
            });
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                        <p>${book.price}</p>
                        <button onClick={() => addToCart(book)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;