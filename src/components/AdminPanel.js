import React from 'react';
import '../styles/AdminPanel.scss';
import AdminLogo from './AdminLogo';
import ApNavbar from './ApNavbar';
import ApSidebar from './ApSidebar';

const AdminPanel = () => {
    return (
        <div className="admin_panel">
            <AdminLogo />
            <ApNavbar />
            <ApSidebar />
            <div>Main body</div>
        </div>
    );
};

export default AdminPanel;
