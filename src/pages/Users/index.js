import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/users/actions';

export const UsersPage = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    
    return (
        <div>
            <h1>Users names</h1>
            <button onClick={() => dispatch(getUsers())}>Fetch users</button>
            <ul>
                {users?.map((user, index) => (
                <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default UsersPage;