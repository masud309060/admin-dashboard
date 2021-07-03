/* eslint-disable prettier/prettier */
import {
    AddOutlined,
    CalendarTodayOutlined,
    GetAppOutlined,
    ShareOutlined
} from '@material-ui/icons';
import React from 'react';
import '../styles/ApBodyHeader.scss';

const ApBodyHeader = () => {
    return (
        <div className="ap_body_header">
            <h2>Ecommerce Dashboard</h2>
            <div className="ap_body_btn_group">
                <div className="ap_body_btn">
                    <CalendarTodayOutlined className="icon" fontSize="small" />
                    <select name="date">
                        <option value="1">Oct 30, 2019 - Nov 30, 2019</option>
                        <option value="2">Nov 30, 2019 - Dec 30, 2019</option>
                    </select>
                </div>
                <div className="ap_body_btn">
                    <GetAppOutlined className="icon" fontSize="small" />
                    <span>Export</span>
                </div>
                <div className="ap_body_btn">
                    <ShareOutlined className="icon" fontSize="small" />
                    <span>Share</span>
                </div>
                <button type="button" className="ap_body_btn primary_btn">
                    <AddOutlined />
                    <span>Add New</span>
                </button>
            </div>
        </div>
    );
};

export default ApBodyHeader;
