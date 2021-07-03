import { MoreHorizOutlined } from '@material-ui/icons';
import React from 'react';
import '../styles/TopSellingProducts.scss';

const TopSellingProducts = () => {
    const products = [
        {
            id: 1,
            name: 'Samsung Galaxy S8 256GB',
            price: 280,
            sold: 126,
            revenue: 38536,
        },
        {
            id: 2,
            name: 'Half Sleeve Shirt',
            price: 25,
            sold: 80,
            revenue: 20500,
        },
        {
            id: 3,
            name: 'Marco Shoes',
            price: 32,
            sold: 36,
            revenue: 15536,
        },
        {
            id: 4,
            name: '15" Machbook Pro',
            price: 600,
            sold: 26,
            revenue: 10536,
        },
        {
            id: 5,
            name: 'Apple iPhone X',
            price: 950,
            sold: 56,
            revenue: 30536,
        },
    ];

    return (
        <div className="top_selling_products">
            <div className="header">
                <h3>Top selling products</h3>
                <MoreHorizOutlined />
            </div>
            <div className="table_container">
                <table className="table">
                    <tr>
                        <th>Products Name</th>
                        <th>Price</th>
                        <th>Sold</th>
                        <th>Revenue</th>
                    </tr>
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.sold}</td>
                            <td>${item.revenue}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default TopSellingProducts;
