// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import UserContext from '../Contexts/UserContext';

// const Header = () => {

//     const { currentUser } = useContext(UserContext)

//     return (
//         <header>

//         <h1 aria-label="NC News" > &lt;NC-News/&gt; </h1>
    


//         <nav id='nav'>
//         <Link to='/home'> Home </Link>
//         <Link to='/articles'> Articles</Link>
//         <Link to='/topics'> Topics </Link>
//         <Link to='/users'> Switch Users</Link>
   

//         {currentUser.username ? (
//             <div>
//                 <img src={currentUser.avatar_url} alt={`${currentUser.username}'s Avatar`} />
//                 <p>{currentUser.username} is logged in!</p>
//             </div>
//             ) : (
//                 <p>No user logged in</p>
//             )}
//         </nav>

      
//         </header>
//     );
// };

// export default Header;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Import styled
import UserContext from '../Contexts/UserContext';

const StyledAppBar = styled(AppBar)({
    backgroundColor: '#6a287e', // Plum color
});

const StyledTypography = styled(Typography)({
    flexGrow: 1,
    fontWeight: 'bold',
    fontFamily: 'Consolas, monospace',
});

const StyledLink = styled(Link)({
    color: '#fff', // White color for links
    marginRight: '1rem', // Add spacing between links
    textDecoration: 'none', // Remove underline from links
    transition: 'color 0.3s', // Smooth color transition on hover
    '&:hover': {
        color: '#ffd700', // Change color on hover
    },
    fontFamily: 'Consolas, monospace',
});

const StyledUserContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
});

const StyledUsername = styled('p')({
    color: '#fff',
    marginRight: '0.5rem',
    fontFamily: 'Consolas, monospace',
});

const StyledAvatar = styled('img')({
    width: '40px', // Set the width of the avatar
    height: '40px', // Set the height of the avatar
    borderRadius: '50%', // Make the avatar circular
});

const Header = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <StyledTypography variant="h6">
                    &lt;NC-News/&gt;
                </StyledTypography>
                <nav id='nav'>
                    <StyledLink to='/home'>Home</StyledLink>
                    <StyledLink to='/articles'>Articles</StyledLink>
                    <StyledLink to='/topics'>Topics</StyledLink>
                    <StyledLink to='/users'>Switch Users</StyledLink>
                    <StyledUserContainer>
                        {currentUser.username ? (
                            <>
                                <StyledUsername>{currentUser.username}</StyledUsername>
                                <StyledAvatar src={currentUser.avatar_url} alt={`${currentUser.username}'s Avatar`} />
                            </>
                        ) : (
                            <StyledUsername>No user logged in</StyledUsername>
                        )}
                    </StyledUserContainer>
                </nav>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
