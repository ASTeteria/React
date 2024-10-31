

import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';

const Layout: React.FC = () => {
    return (
        <div>
            <Menu />
            <Outlet />

        </div>
    );
};

export default Layout;
