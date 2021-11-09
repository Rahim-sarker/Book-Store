import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = ({ book }) => {
    const { id, img, name, price, description } = book;
    return (
        <div className="book-cart">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>Price:${price}</h3>
            <p>{description}</p>
            <Link to={`/purches/${id}`}>
                <button className="btn btn-success m-3">Buy Now</button>
            </Link>
        </div>
    );
};

export default Book;