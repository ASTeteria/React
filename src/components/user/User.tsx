import React, {FC} from 'react';

interface UserType {
    id: number;
    firstName: string;
    lastName: string;

}

interface UserProps {
    user: UserType;
    onUserClick: (userId: number) => void;
}

const User: FC<UserProps> = ({ user, onUserClick }) => {
    return (
        <div>
            <h3>{user.firstName} {user.lastName}</h3>
            <button onClick={() => onUserClick(user.id)}>Posts</button>
        </div>
    );
};

export default User;
