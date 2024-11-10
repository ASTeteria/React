import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { loadUsers } from '../Slices/usersSlice';

const UsersPage:FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users, loading, error} = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error loading users: {error}</p>;


        return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
