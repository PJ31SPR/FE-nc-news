import React, { useContext } from 'react';
import { styled } from '@mui/system'; 
import UserContext from '../Contexts/UserContext';

const StyledUserCard = styled('div')({
    border: '1px solid #ccc', // Add border for card
    borderRadius: '8px', // Add border radius for card
    padding: '1rem', // Add padding for content
    marginBottom: '1rem', // Add margin bottom for spacing
    backgroundColor: '#fff', // White background color
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow for elevation
});

const StyledName = styled('h3')({
    marginBottom: '0.5rem', // Add margin bottom for spacing
    color: '#6a287e',
    fontFamily: 'Consolas, monospace',
});

const StyledUsername = styled('p')({
    marginBottom: '0.5rem', // Add margin bottom for spacing
    color: '#6a287e',
    fontFamily: 'Consolas, monospace',
});

const StyledAvatar = styled('img')({
    width: '50px', // Set the width of the avatar
    height: '50px', // Set the height of the avatar
    borderRadius: '50%', // Make the avatar circular
    marginRight: '0.5rem', // Add margin right for spacing
});

const StyledButton = styled('button')({
    backgroundColor: '#6a287e', // Plum color
    color: '#fff', // White text color
    border: 'none', // Remove border
    padding: '0.5rem 1rem', // Add padding
    borderRadius: '4px', // Add border radius
    cursor: 'pointer', // Add pointer cursor
    fontFamily: 'Consolas, monospace',
    transition: 'background-color 0.3s', // Smooth background color transition
    "&:hover": {
        backgroundColor: "#ffd700", // Yellow color on hover
      },
});

const UserCard = ({ user }) => {
    const { setCurrentUser } = useContext(UserContext);

    const handleLogin = () => {
        setCurrentUser(user);
    };

    return (
        <StyledUserCard>
            <StyledName>{user.name}</StyledName>
            <StyledUsername>{user.username}</StyledUsername>
            <StyledAvatar src={user.avatar_url} alt={`${user.name}'s Avatar`} />
            <StyledButton onClick={handleLogin}>Log me in!</StyledButton>
        </StyledUserCard>
    );
};

export default UserCard;