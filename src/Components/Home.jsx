import React from 'react';
import { styled } from '@mui/system';

const StyledHomeHeader = styled('h1')({
    color: '#6a287e', // Plum color
    fontFamily: 'Consolas, monospace', // Consolas font family
    textAlign: 'center', // Center align text
    marginBottom: '1rem', // Add margin bottom for spacing
});

const Home = () => {
    return (
        <StyledHomeHeader>Welcome to NC-News!</StyledHomeHeader>
    );
};

export default Home;