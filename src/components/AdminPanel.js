import React from 'react';
import '../styles/AdminPanel.scss';
import AdminLogo from './AdminLogo';
import ApBody from './ApBody';
import ApFooter from './ApFooter';
import ApNavbar from './ApNavbar';
import ApSidebar from './ApSidebar';

const AdminPanel = () => {
    return (
        <div className="admin_panel">
            <AdminLogo />
            <ApNavbar />
            <ApSidebar />
            <ApBody />
            <ApFooter />
        </div>
    );
};

export default AdminPanel;
