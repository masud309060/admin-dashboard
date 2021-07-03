import { MoreHorizOutlined } from '@material-ui/icons';
import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import '../styles/RevenueByDevice.scss';

const RevinueByDevice = () => {
    const data = [
        { name: 'Desktop', value: 5870, percentage: 45 },
        { name: 'Mobile', value: 4456, percentage: 30 },
        { name: 'Tablets', value: 2420, percentage: 25 },
    ];

    const COLORS = ['#5F63F2', '#20C997', '#FA8B0C', '#FF8042'];
    return (
        <div className="revenue_by_device">
            <div className="header">
                <h3>Revenue By Device</h3>
                <ul className="header_nav">
                    <li className="active">Today</li>
                    <li>Week</li>
                    <li>Month</li>
                    <MoreHorizOutlined />
                </ul>
            </div>
            <div className="pie_chart">
                <ResponsiveContainer width="100%" aspect={2.8}>
                    <PieChart width={600} height={300}>
                        <Pie
                            data={data}
                            innerRadius={40}
                            outerRadius={70}
                            fill="#8884d8"
                            paddingAngle={1}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="Pie_chart_table">
                {data.map((item, i) => (
                    <div className="table_row" key={i}>
                        <div className="row_item">
                            <div className="circle" style={{ backgroundColor: `${COLORS[i]}` }} />
                            <span>{item.name}</span>
                        </div>
                        <strong>${item.value}</strong>
                        <span>{item.percentage}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RevinueByDevice;
