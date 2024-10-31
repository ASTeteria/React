import React, {FC} from 'react';
import { useZuStore } from '../store/useZuStore';

const CommentsPage: FC = () => {
    const comments = useZuStore((state) => state.comments);

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsPage;
