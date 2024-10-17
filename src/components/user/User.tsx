import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

type UserProps = {
    item: IUser;
}
const User:FC <UserProps>= ({item}) => {
    return (
        <div>
            {
                item.name
            }
        </div>
    );
};

export default User;