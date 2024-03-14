import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const Header = () => {

    const { currentUser } = useContext(UserContext)

    return (
        <header>

        <h1> &lt;NC-News/&gt; </h1>
        {currentUser.username ? (
                <>
                    <img src={currentUser.avatar_url} alt="User Avatar" />
                    <p>{currentUser.username} is logged in!</p>
                </>
            ) : (
                <p>No user logged in</p>
            )}


        <nav id='nav'>
        <Link to='/home'> Home </Link>
        <Link to='/articles'> Articles</Link>
        <Link to='/topics'> Topics </Link>
        <Link to='/users'> Switch Users</Link>
        </nav>

        </header>
    );
};

export default Header;