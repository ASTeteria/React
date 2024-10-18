import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {Link} from "react-router-dom";



type PostProps = {
    item: IPost;
}
const Post:FC <PostProps>= ({item}) => {
    return (
        <div>

            <h2>
                <Link state={{data: item}} to={item.id.toString()}>{item.title}</Link>
            </h2>
            <p><strong>PostId:</strong> {item.id}</p>
            <p><strong>Title:</strong> {item.title}</p>
            <p><strong>Body:</strong> {item.body}</p>
        </div>
    );
};

export default Post;