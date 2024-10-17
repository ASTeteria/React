import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css'

const Menu: FC = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/comments">Comments</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
