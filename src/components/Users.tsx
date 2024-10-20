import React, {FC} from 'react';
import {IUser} from "../models/IUser";

type UsersProps = {
    users: IUser[];
}
const Users: FC<UsersProps> = ({users}) => {
    console.log(users);
    return (
        <div>
            {
                users.map(item => (<div>{item.firstName}</div>))
            }

        </div>
    );
};

export default Users;