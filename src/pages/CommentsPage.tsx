import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { loadComments } from '../Slices/commentsSlice';

const CommentsPage:FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { comments, loading, error} = useSelector((state: RootState) => state.comments);

    useEffect(() => {
        dispatch(loadComments());
    }, [dispatch]);

    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error loading users: {error}</p>;


    return (
        <div>
            <h1>Comments</h1>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                        <small>{comment.email}</small>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsPage;
