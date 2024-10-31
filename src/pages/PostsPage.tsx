import React, {FC} from 'react';
import { useZuStore } from '../store/useZuStore';

const PostsPage: FC = () => {
    const posts = useZuStore((state) => state.posts);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
