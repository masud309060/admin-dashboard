import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@material-ui/icons';
import React from 'react';
import '../styles/BarChartCard.scss';
import SimpleBarChart from './SimpleBarChart';

const BarChartCard = ({ cardData }) => {
    const { title, value, percentage, color, graphColor, graphIncreasing } = cardData;
    return (
        <div className="bar_Chart_card">
            <div className="bar_Chart_card_content">
                <div className="header">
                    <h1>{value}</h1>
                    <p>{title}</p>
                </div>
                <div className="footer">
                    <strong style={{ color: `${color}` }}>
                        {graphIncreasing ? (
                            <ArrowUpwardOutlined fontSize="small" />
                        ) : (
                            <ArrowDownwardOutlined fontSize="small" />
                        )}
                        {percentage}%
                    </strong>{' '}
                    <span>Since the last week</span>
                </div>
            </div>
            <div className="bar_Chart_card_graph">
                <SimpleBarChart graphColor={graphColor} />
            </div>
        </div>
    );
};

export default BarChartCard;
