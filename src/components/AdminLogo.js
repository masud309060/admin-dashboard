import { MenuOutlined } from '@material-ui/icons';
import React from 'react';
import '../styles/AdminLogo.scss';

const AdminLogo = () => {
    return (
        <div className="admin_logo">
            <MenuOutlined />
            <div className="icon">A</div>
            <h3>Admin</h3>
        </div>
    );
};

export default AdminLogo;
