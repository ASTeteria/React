import React, {FC} from 'react';
import { useMyContext } from '../context/MyContext';

const CommentsPage: FC = () => {
    const { comments } = useMyContext();

    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.body}</li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsPage;
