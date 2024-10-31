import React, {FC} from 'react';
import { useZuStore } from '../store/useZuStore';

const UsersPage: FC = () => {
    const users = useZuStore((state) => state.users);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;
