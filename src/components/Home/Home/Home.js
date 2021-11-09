import React from 'react';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Books></Books>
            <Contact></Contact>
        </div>
    );
};

export default Home;