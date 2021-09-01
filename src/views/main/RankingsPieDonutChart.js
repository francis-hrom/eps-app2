import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    { key: '1-5', y: 44, color: '#ff8a65' },
    { key: '5-10', y: 0, color: '#f4c22b' },
    { key: '10-20', y: 32, color: '#04a9f5' },
    { key: '21-50', y: 196, color: '#3ebfea' },
    { key: '51-100', y: 44, color: '#4F5467' },
    { key: '101-200', y: 98, color: '#1de9b6' },
    { key: '201-500', y: 13, color: '#a389d4' },
    { key: '501+', y: 15, color: '#FE8A7D' }
];

const RankingsPieDonutChart = () => {
    return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" donut labelType="percent" />;
};

export default RankingsPieDonutChart;
