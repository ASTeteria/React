import React, {FC} from 'react';
import { useMyContext } from '../context/MyContext';

const PostsPage: FC = () => {
    const { posts } = useMyContext();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
