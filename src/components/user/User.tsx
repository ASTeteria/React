import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";

type UserProps = {
    item: IUser;
}
const User:FC <UserProps>= ({item}) => {
    return (
        <div>
            <h2>
                <Link state={{data: item}} to={item.id.toString()}>
                    {item.name}
                </Link>
            </h2>
            <p><strong>Username:</strong> {item.username}</p>
            <p><strong>Email:</strong> {item.email}</p>



        </div>
    );
};

export default User;