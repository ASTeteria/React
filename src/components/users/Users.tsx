import React, {useEffect, useState} from 'react';
import {getUsers} from "../../services/api.services";
import User from "../user/User";
import {IUser} from "../../models/IUser";



const Users = () => {
   const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value));
    }, []);
    return (
        <div>
            {
               users.map((user:IUser) => (<User key={user.id} item={user}/>))
            }
        </div>
    );
};

export default Users;