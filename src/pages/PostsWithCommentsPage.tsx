import React, {FC} from 'react';
import { useZuStore } from '../store/useZuStore';

const PostsWithCommentsPage: FC = () => {
    const posts = useZuStore((state) => state.posts);
    const comments = useZuStore((state) => state.comments);

    return (
        <div>
            <h1>Posts with Comments</h1>
            {posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <h3>Comments</h3>
                    <ul>
                        {comments
                            .filter((comment) => comment.postId === post.id)
                            .map((comment) => (
                                <li key={comment.id}>{comment.body}</li>
                            ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PostsWithCommentsPage;
