import React, {useEffect, useState} from 'react';
import {getComments} from "../../services/api.services";
import Comment from "../comment/Comment";
import user from "../user/User";
import {IComment} from "../../models/IComment";



const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        getComments().then(value => setComments(value));
    }, []);
    return (
        <div>
            {
                comments.map((comment:IComment) => (<Comment key={comment.id} item={comment}/>))
            }
        </div>
    );
};

export default Comments;