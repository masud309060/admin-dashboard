import React from 'react';
import '../styles/ApBodyRowThree.scss';
import SalesByLocation from './SalesByLocation';
import TotalRevenue from './TotalRevenue';

const ApBodyRowThree = () => {
    return (
        <div className="ap_body_row_three">
            <TotalRevenue />
            <SalesByLocation />
        </div>
    );
};

export default ApBodyRowThree;
