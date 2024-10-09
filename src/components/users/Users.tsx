import React, {FC} from 'react';
import User from '../user/User';

interface UserType {
    id: number;
    firstName: string;
    lastName: string;

}

interface UsersProps {
    users: UserType[];
    onUserClick: (userId: number) => void;
}

const Users: FC<UsersProps> = ({ users, onUserClick }) => {
    return (
        <div>
            {users.map(user => (
                <User key={user.id} user={user} onUserClick={onUserClick} />
            ))}
        </div>
    );
};

export default Users;
