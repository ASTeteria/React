import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

type ComProps = {
    item: IComment;
}
const Comment:FC <ComProps>= ({item}) => {
    return (
        <div>
            {
                item.body
            }
        </div>
    );
};

export default Comment;