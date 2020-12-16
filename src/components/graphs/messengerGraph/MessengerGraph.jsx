import React, { useState } from "react";
import Chart from "react-apexcharts";

import "./MessengerGraph.scss";

const MessengerGraph = () => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "apexchart-example"
        },
        xaxis: {
            categories: ["", "Today", , , , ,]
        },
        yaxis: {
            min: 230,
            max: 330
        }
    });

    const [chartSeries, setChartSeries] = useState([
        {
            name: "series-1",
            data: ["", 270, , , , ,]
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
