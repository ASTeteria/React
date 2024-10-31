import React, {FC} from 'react';
import { useMyContext } from '../context/MyContext';

const PostsWithCommentsPage:FC = () => {
    const { posts, comments } = useMyContext();

    return (
        <div>
            <h1>Posts with Comments</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <h3>Comments</h3>
                    <ul>
                        {comments
                            .filter(comment => comment.postId === post.id)
                            .map(comment => (
                                <li key={comment.id}>{comment.body}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PostsWithCommentsPage;
