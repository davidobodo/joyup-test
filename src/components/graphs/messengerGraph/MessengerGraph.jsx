import React, { useState, memo, useEffect } from "react";
import Chart from "react-apexcharts";

import "./MessengerGraph.scss";

import { labelsForOneMonth, valuesForOneMonth } from "../GraphUitls";

const MessengerGraph = ({ dateRange }) => {
    const [chartOptions, setChartOptions] = useState({
        chart: {
            id: "apexchart-example"
        },

        yaxis: {
            min: 230,
            max: 330
        },
        xaxis: {
            //----------------------
            //X axis for one day
            //----------------------
            //categories: ["", "Today", , , , ,]
            //----------------------
            //X axis for one month
            //----------------------
            categories: labelsForOneMonth()
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            colors: ["#09D5B0"]
        }
    });

    const [chartSeries, setChartSeries] = useState([
        //----------------------
        //Value for one day
        //----------------------
        // {
        //     name: "series-1",
        //     data: ["", 270, , , , ,]
        // },
        //----------------------
        //Value for one month
        //----------------------
        {
            name: "series-1",
            data: valuesForOneMonth()
        }
    ]);

    return (
        <div className="messenger-graph">
            <h4 className="messenger-graph__title">Active Messenger Subscribers</h4>
            <div className="messenger-graph__content">
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    // width={500} height={320}
                />
            </div>
        </div>
    );
};

export default memo(MessengerGraph);
