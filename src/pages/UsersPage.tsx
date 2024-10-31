import React, {FC} from 'react';
import { useMyContext } from '../context/MyContext';

const UsersPage: FC = () => {
    const { users } = useMyContext();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
