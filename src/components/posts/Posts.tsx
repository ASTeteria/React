import React, {useEffect, useState} from 'react';
import {getPosts} from "../../services/api.services";
import Post from "../post/Post";
import {IPost} from "../../models/IPost";



const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value));
    }, []);
    return (
        <div>
            {
                posts.map((post:IPost) => (<Post key={post.id} item={post}/>))
            }
        </div>
    );
};

export default Posts;