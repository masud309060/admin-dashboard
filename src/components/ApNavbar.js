/* eslint-disable prettier/prettier */
import {
    HelpOutlineOutlined,
    MailOutline,
    NotificationsNone,
    SettingsOutlined
} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import '../styles/ApNavbar.scss';

const ApNavbar = () => {
    return (
        <div className="ap_navbar">
            <div className="search_bar">
                <SearchIcon />
                <input type="text" placeholder="Search..." />
            </div>
            <div className="control_bar">
                <div className="icon_wrapper">
                    <div className="badge mail"> </div>
                    <MailOutline />
                </div>
                <div className="icon_wrapper">
                    <div className="badge notification"> </div>
                    <NotificationsNone />
                </div>
                <SettingsOutlined />
                <HelpOutlineOutlined />
                <img
                    src="https://img.pngio.com/england-kingdom-of-great-britain-flag-of-the-united-kingdom-flag-flag-of-england-png-728_433.jpg"
                    alt="flag"
                    height="30"
                    width="30"
                />
                <img
                    src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
                    alt="profile" 
                    height="40"
                    width="40"
                />
            </div>
        </div>
    );
};

export default ApNavbar;
