/* eslint-disable prettier/prettier */
import { MoreHorizOutlined } from "@material-ui/icons";
import React from "react";
import {
	CartesianGrid, Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts";
import "../styles/TotalRevenue.scss";

const TotalRevenue = () => {
	const data = [
		{
			name: "Jan",
			'Previous Period': 30,
			'Current Period': 20,
		},
		{
			name: "Feb",
			'Previous Period': 38,
			'Current Period': 38,
		},
		{
			name: "Mar",
			'Previous Period': 46,
			'Current Period': 26,
		},
		{
			name: "Apr",
			'Previous Period': 40,
			'Current Period': 46,
		},
		{
			name: "May",
			'Previous Period': 38,
			'Current Period': 40,
		},
		{
			name: "Jun",
			'Previous Period': 30,
			'Current Period': 46,
		},
		{
			name: "Jul",
			'Previous Period': 24,
			'Current Period': 42,
		},
		{
			name: "Aug",
			'Previous Period': 20,
			'Current Period': 52,
		},
		{
			name: "Sep",
			'Previous Period': 28,
			'Current Period': 46,
		},
		{
			name: "Oct",
			'Previous Period': 34,
			'Current Period': 40,
		},
		{
			name: "Nov",
			'Previous Period': 38,
			'Current Period': 50,
		},
		{
			name: "Dec",
			'Previous Period': 46,
			'Current Period': 52,
		},
	];

	return (
		<div className="total_revenue">
			<div className="header">
				<h3>Total revenue</h3>
				<MoreHorizOutlined /> 
			</div>
			<div className="period">
				<div>
                    <p>$72,430</p>
                    <li>Current Period</li>
                </div>
				<div>
                    <p>$52,430</p>
                    <li>Previous Period</li>
                </div>
			</div>
			<div className="line_chart">
				<ResponsiveContainer width="100%" aspect={2.6}>
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 5,
							right: 30,
							left: 0,
							bottom: 10,
						}}
					>
						<CartesianGrid horizontal="true" vertical="" />
						<XAxis dataKey="name" stroke={1} />
						<YAxis stroke={1} unit="k " axisLine={false} />
						<Tooltip />
						<Line
							type="monotone"
							dataKey="Current Period"
							stroke="#8884d8"
							strokeWidth={2}
                            dot={false}
							activeDot={{r: 6}}
						/>
						<Line
							type="monotone"
							dataKey="Previous Period"
							stroke="#adb4d2"
							strokeWidth={1}
                            dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TotalRevenue;
