import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const MetricDataLineChart = ({ data }) => (
  <LineChart data={data} width={600} height={300}>
    <XAxis dataKey="time" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#82ca9d" />
  </LineChart>
)

export default MetricDataLineChart
