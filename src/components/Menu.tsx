import React from 'react';
import {Link} from "react-router-dom";
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'users'}>USERS</Link></li>

            </ul>
        </div>
    );
};

export default Menu;