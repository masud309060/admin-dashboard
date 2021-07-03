import React from 'react';
import '../styles/ApBodyRowOne.scss';
import BarChartCard from './BarChartCard';

const ApBodyRowOne = () => {
    const barChartCardsData = [
        {
            barId: 1,
            title: 'Orders',
            value: '7,641',
            percentage: '25',
            color: '#20C997',
            graphColor: '#5F63F2',
            graphIncreasing: true,
        },
        {
            barId: 2,
            title: 'Revenue',
            value: '$28,947',
            percentage: '25',
            color: '#20C997',
            graphColor: '#FF69A5',
            graphIncreasing: true,
        },
        {
            barId: 3,
            title: 'Avg. order value',
            value: '$3,241',
            percentage: '8.2',
            color: '#FF4D4F',
            graphColor: '#20C997',
            graphIncreasing: false,
        },
    ];
    return (
        <div className="ab_body_row_one">
            {barChartCardsData.map((item) => (
                <BarChartCard cardData={item} key={item.barId} />
            ))}
        </div>
    );
};

export default ApBodyRowOne;
