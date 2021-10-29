import React from 'react';
import BarChartCard from './BarChartCard';

const ApBodyRowTwo = () => {
    const barChartCardsData = {
        title: 'Unique Visitor',
        value: '45.2k',
        percentage: '12.3',
        color: '#20C997',
        graphColor: '#2C99FF',
        graphIncreasing: true,
    };
    return (
        <div className="ab_body_row_one">
            <BarChartCard cardData={barChartCardsData} />
        </div>
    );
};

export default ApBodyRowTwo;
