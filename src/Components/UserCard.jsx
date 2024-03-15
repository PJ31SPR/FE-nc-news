import React, {useContext} from 'react';
import './UserCard.css'
import UserContext from '../Contexts/UserContext';

const UserCard = ({ user }) => {

    const { setCurrentUser } = useContext(UserContext)

    const handleLogin = () => {
        setCurrentUser(user);
    };

    return (
        <div className='user-card' >
            <h3> {user.name}</h3>
            <p> {user.username} </p>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`}  />
            <button onClick={handleLogin} role="log me in button"> Log me in! </button>
        </div>
    );
};

export default UserCard;