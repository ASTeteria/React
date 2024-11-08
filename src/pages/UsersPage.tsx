import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { loadUsers } from '../Slices/usersSlice';

const UsersPage:FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { users} = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);
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
