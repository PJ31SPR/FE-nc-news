import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>

        <h1> &lt;NC-News/&gt; </h1>
        <nav id='nav'>
        <Link to='/home'> Home </Link>
        <Link to='/articles'> Articles</Link>
        <Link to='/topics'> Topics </Link>
        </nav>

        </header>
    );
};

export default Header;