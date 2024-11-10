import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { loadPosts } from '../Slices/postsSlice';

const PostsPage:FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { posts, loading, error} = useSelector((state: RootState) => state.posts);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error loading posts: {error}</p>;


    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
