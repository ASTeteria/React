import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import {IComment} from "../models/IComment";
import {getPostComments} from "../services/api.services";
import {IPost} from "../models/IPost";




const PostCommentsPage = () => {
    let {state:{data}} = useLocation();
    const post: IPost = data;

    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getPostComments(post.id).then(data => {
            setComments(data);
        });
    }, [post.id]);
    return (
        <div>
            <h2>{post.title}'s Posts</h2>
            {comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <p><strong>id:</strong> {comment.id}</p>
                        <p><strong>body:</strong> {comment.body}</p>
                    </div>
                );
            })}
        </div>
    );
};


export default PostCommentsPage;