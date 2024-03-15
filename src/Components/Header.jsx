import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const Header = () => {

    const { currentUser } = useContext(UserContext)

    return (
        <header>

        <h1 aria-label="NC News" > &lt;NC-News/&gt; </h1>
    


        <nav id='nav'>
        <Link to='/home'> Home </Link>
        <Link to='/articles'> Articles</Link>
        <Link to='/topics'> Topics </Link>
        <Link to='/users'> Switch Users</Link>
   

        {currentUser.username ? (
            <div>
                <img src={currentUser.avatar_url} alt={`${currentUser.username}'s Avatar`} />
                <p>{currentUser.username} is logged in!</p>
            </div>
            ) : (
                <p>No user logged in</p>
            )}
        </nav>

      
        </header>
    );
};

export default Header;