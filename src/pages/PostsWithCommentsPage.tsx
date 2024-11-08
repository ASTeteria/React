import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const PostsWithCommentsPage:FC = () => {
    const { posts } = useSelector((state: RootState) => state.posts);
    const { comments } = useSelector((state: RootState) => state.comments);

    return (
        <div>
            <h1>Posts with Comments</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <h3>Comments:</h3>
                        <ul>
                            {comments
                                .filter(comment => comment.postId === post.id)
                                .map(comment => (
                                    <li key={comment.id}>
                                        <p>{comment.body}</p>
                                        <p>{comment.email}</p>
                                    </li>
                                ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsWithCommentsPage;
