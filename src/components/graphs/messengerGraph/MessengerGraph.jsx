import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./MessengerGraph.scss";

const labelsForOneMonth = () => {
    let labels = [];

    for (let i = 0; i < 31; i++) {
        const day = `November ${i + 1} 2020`;
        labels.push(day);
    }

    return labels;
};

const valuesForOneMonth = () => {
    let values = [];
    for (let i = 0; i < 31; i++) {
        const val = Math.random() * (330 - 230) + 230;
        values.push(parseInt(val));
    }

    return values;
};

const MessengerGraph = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "apexchart-example"
        },

        yaxis: {
            min: 230,
            max: 330
        },
        //X axis for one day
        // xaxis: {
        //     categories: ["", "Today", , , , ,]
        // },
        xaxis: {
            categories: labelsForOneMonth()
        }
    });

    const [chartSeries, setChartSeries] = useState([
        //Value for one day
        // {
        //     name: "series-1",
        //     data: ["", 270, , , , ,]
        // },
        {
            name: "series-1",
            data: valuesForOneMonth()
        }
    ]);
    return (
        <div className="messenger-graph">
            <h4 className="messenger-graph__title">Active Messenger Subscribers</h4>
            <div className="messenger-graph__content">
                <Chart options={chartOptions} series={chartSeries} type="bar" width={500} height={320} />
            </div>
        </div>
    );
};

export default MessengerGraph;
