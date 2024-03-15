import React, {useEffect, useContext, useState} from 'react';
import { getAllUsers } from '../../api';
import UserCard from './UserCard';
import './Users.css'
import ErrorFetch from './ErrorFetch';
import Loading from './Loading';

const Users = () => {

    const [users, setUsers] = useState([])
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAllUsers()
            .then((usersFromAPI) => {
                setUsers(usersFromAPI);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
                setError('Failed to fetch users. Please try again later.');
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <ErrorFetch error={error} />;
    }

    return (
        <div className="users-container">
       
      
            {users.map((user) => (
                <UserCard key={user.username} className='user-card' user={user} />
            ))}
       
       </div>
     
  
    );
};

export default Users;