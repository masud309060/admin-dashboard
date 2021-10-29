import React from 'react';
import '../styles/ApBodyRowThree.scss';
import RevinueByDevice from './RevinueByDevice';
import TopSellingProducts from './TopSellingProducts';

const ApBodyRowFour = () => {
    return (
        <div className="ap_body_row_three">
            <TopSellingProducts />
            <RevinueByDevice />
        </div>
    );
};

export default ApBodyRowFour;
