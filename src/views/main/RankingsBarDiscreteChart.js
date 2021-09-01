import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Total Amount',
        values: [
            {
                label: 'January',
                value: 1042,
                color: '#3ebfea'
            },
            {
                label: 'February',
                value: 1182,
                color: '#04a9f5'
            },
            {
                label: 'March',
                value: 1242,
                color: '#ff8a65'
            },
            {
                label: 'April',
                value: 1356,
                color: '#1de9b6'
            },
            {
                label: 'May',
                value: 1425,
                color: '#4C5667'
            },
            {
                label: 'June',
                value: 1580,
                color: '#69CEC6'
            },
            {
                label: 'July',
                value: 1595,
                color: '#a389d4'
            },
            {
                label: 'August',
                value: 1658,
                color: '#FE8A7D'
            }
        ]
    }
];

const RankingsBarDiscreteChart = () => {
    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />;
};

export default RankingsBarDiscreteChart;
