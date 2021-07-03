import { MoreHorizOutlined } from '@material-ui/icons';
import React from 'react';
import '../styles/SalesByLocation.scss';
import GeoMap from './GeoMap';
// import GeoMap from './GeoMap';

const SalesByLocation = () => {
    const salesData = [
        {
            id: 1,
            location: 'United States',
            order: 397,
            revenue: 23397,
        },
        {
            id: 2,
            location: 'United States',
            order: 378,
            revenue: 21397,
        },
        {
            id: 3,
            location: 'Canada',
            order: 220,
            revenue: 18398,
        },
        {
            id: 4,
            location: 'China',
            order: 140,
            revenue: 13391,
        },
    ];
    return (
        <div className="sales_by_location">
            <div className="header">
                <h3>Sales by Location</h3>
                <MoreHorizOutlined />
            </div>
            <div className="map_area">
                <GeoMap />
            </div>
            <div className="sales_table">
                <table>
                    <tr>
                        <th>Top Location</th>
                        <th>Order</th>
                        <th>Revenue</th>
                    </tr>
                    {salesData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.location}</td>
                            <td>{item.order}</td>
                            <td>${item.revenue}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default SalesByLocation;
