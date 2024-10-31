import React, {FC} from 'react';
import { Link } from 'react-router-dom';

const Menu: FC = () => (
    <nav>
        <ul>
            <li><Link to="users">Users</Link></li>
            <li><Link to="posts">Posts</Link></li>
            <li><Link to="comments">Comments</Link></li>
            <li><Link to="posts-with-comments">Posts with Comments</Link></li>
        </ul>
    </nav>
);

export default Menu;
