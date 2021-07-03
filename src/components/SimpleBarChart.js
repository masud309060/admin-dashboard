import React, { useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 1600,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 1200,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 3000,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 2600,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 1800,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 1200,
        pv: 4300,
        amt: 2100,
    },
];

const SimpleBarChart = ({ graphColor }) => {
    const [activeIndex] = useState(3);
    return (
        <div style={{ width: '100%' }}>
            <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={60} data={data}>
                    <Bar dataKey="uv">
                        {data.map((entry, index) => (
                            <Cell
                                cursor="pointer"
                                fill={index === activeIndex ? `${graphColor}99` : `${graphColor}22`}
                                key={`cell-${index}`}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SimpleBarChart;
