import React, {useEffect, useContext, useState} from 'react';
import UserContext from '../Contexts/UserContext';
import { getAllUsers } from '../../api';
import UserCard from './UserCard';
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((usersFromAPI) => {
            setUsers(usersFromAPI);
        });
    }, []);

    return (
        <div className="users-container">
       
      
            {users.map((user) => (
                <UserCard key={user.username} className='user-card' user={user} />
            ))}
       
       </div>
     
  
    );
};

export default Users;