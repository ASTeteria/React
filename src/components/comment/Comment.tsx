import React, {FC} from 'react';
import {IComment} from "../../models/IComment";


type ComProps = {
    item: IComment;
}
const Comment:FC <ComProps>= ({item}) => {
    return (
        <div>
            <h2>CommentId: {item.id}</h2>
            <p><strong>PostId:</strong> {item.postId}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Body:</strong> {item.body}</p>
        </div>
    );
};

export default Comment;