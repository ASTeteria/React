import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {getUserPosts} from "../services/api.services";


const UserDetailsPage = () => {
    let {state:{data}} = useLocation();
    const user: IUser = data;

    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getUserPosts(user.id).then(data => setPosts(data));
    }, [user.id]);
    return (
        <div>

            <h2>name: {user.name}</h2>
            <h3>username: {user.username}</h3>
            <p>email: {user.email}</p>
            <h1>{user.name}'s Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};


export default UserDetailsPage;