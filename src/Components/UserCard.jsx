import React, {useContext} from 'react';
import './UserCard.css'
import UserContext from '../Contexts/UserContext';

const UserCard = ({ user }) => {

    const { setCurrentUser } = useContext(UserContext)

    return (
        <div className='user-card'>
            <h3> {user.name}</h3>
            <p> {user.username} </p>
            <img src={user.avatar_url} />
            <button onClick={() => {setCurrentUser(user)}}> Log me in! </button>
        </div>
    );
};

export default UserCard;