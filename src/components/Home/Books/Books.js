import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './books.css'

const Books = () => {

    const [bookservice, setBookService] = useState([]);
    useEffect(() => {
        fetch('https://stormy-spire-56245.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBookService(data))
    });
    return (

        <div id="books" className="mt-5">
            <h2>Our Available Books</h2>
            <div className="books-container">

                {
                    bookservice.map(book => <Book
                        key={book.id}
                        book={book}
                    ></Book>)
                }

            </div>
        </div>
    );
};

export default Books;